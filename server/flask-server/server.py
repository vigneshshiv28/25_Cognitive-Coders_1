from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from image_extraction import image_text_extraction
from doc_text_extraction import extract_text_from_doc,extract_text_from_pdf
from flask_cors import CORS
#from transformers import pipeline
#pipe = pipeline("text-classification", model="roberta-base-openai-detector")
from RunOnce.perplexitymodel import GPT2PPL
model = GPT2PPL(device="cpu")

app = Flask(__name__)

CORS(app)
@app.route('/',methods=['GET'])
def home():
    return 'Welcome to  server!'


@app.route('/submit-data', methods=['POST'])
def submit_data():
    print(request.files)
    if 'file' in request.files:
        print("here")
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'})

        # Extract filename using secure_filename
        filename = secure_filename(file.filename)
        if file.filename == '':
            return jsonify({'error': 'No selected file'})
        print(file.filename)
        filename = secure_filename(file.filename)
        if filename.endswith('.pdf'):
            extracted_text = extract_text_from_pdf(file)
            results = model(extracted_text)
            #results = pipe(extracted_text)
            return jsonify({"results":results})
        elif filename.endswith(('.doc', '.docx')):
            extracted_text = extract_text_from_doc(file)
            results = model(extracted_text)
            #results = pipe(extracted_text)
            return jsonify({"results":results})
        elif filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            extracted_text = image_text_extraction(file)
            results = model(extracted_text)
            #results = pipe(extracted_text)
            return jsonify(results)
        else:
            return jsonify({'error': 'Unsupported file type'})
        
        
    
    elif 'text' in request.form:
        # Text box input case
        text = request.form['text']
        extracted_text = text
        results = model(extracted_text)
        #results = pipe(extracted_text)
        return jsonify({"results":results})

    else:
        return jsonify({'error': 'No input provided'})

if __name__ == '__main__':
    app.run(debug=True)
