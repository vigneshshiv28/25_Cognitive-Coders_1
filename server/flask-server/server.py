from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from image_extraction import image_text_extraction
from doc_text_extraction import extract_text_from_doc,extract_text_from_pdf

app = Flask(__name__)




@app.route('/submit-data', methods=['POST'])
def submit_data():
    if 'file' in request.files:
        # File upload case
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'})
        
        filename = secure_filename(file.filename)
        if filename.endswith() == '.pdf':
            extracted_text = extract_text_from_pdf(file)
        elif filename.endswith() in ('.doc', '.docx'):
            extracted_text = extract_text_from_doc(file)
        elif filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            extracted_text = image_text_extraction(file)
        else:
            return jsonify({'error': 'Unsupported file type'})
        
        return jsonify({'extracted_text': extracted_text})
    
    elif 'text' in request.form:
        # Text box input case
        text = request.form['text']
        extracted_text = text
        return jsonify({'extracted_text': extracted_text})

    else:
        return jsonify({'error': 'No input provided'})

if __name__ == '__main__':
    app.run(debug=True)
