from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from extraction_function import doc_text_extraction, image_text_extraction

app = Flask(__name__)




@app.route('/submit-data', methods=['POST'])
def submit_data():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        filename = secure_filename(file.filename)
        if filename.endswith('.txt'):
            extracted_text = text_extraction(file.read().decode('utf-8'))
        elif filename.endswith(('.doc', '.docx', '.pdf')):
            extracted_text = doc_text_extraction(file)
        elif filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            extracted_text = image_text_extraction(file)
        else:
            return jsonify({'error': 'Unsupported file type'})

        return jsonify({'extracted_text': extracted_text})

if __name__ == '__main__':
    app.run(debug=True)
