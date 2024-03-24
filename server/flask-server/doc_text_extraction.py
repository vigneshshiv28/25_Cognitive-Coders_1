import io
import docx
from flask_cors import CORS
from PyPDF2 import PdfReader

def extract_text_from_pdf(file):
    pdf_reader = PdfReader(file)
    text = ''
    for page in pdf_reader.pages:
        text += page.extract_text()
    text = text.replace('\n', ' ')
    return text.strip()

def extract_text_from_doc(file):
    # Load the DOC file using python-docx
    doc = docx.Document(io.BytesIO(file.read()))
    
    # Initialize an empty string to store the extracted text
    text = ''
    
    # Iterate through each paragraph in the DOC file
    for para in doc.paragraphs:
        text += para.text + '\n'
    
    return text