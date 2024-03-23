import io
import docx
import fitz  

def extract_text_from_pdf(file):
    # Read the PDF file
    pdf_data = file.read()
    
    # Create a PDF document object
    pdf_document = fitz.open(io.BytesIO(pdf_data))
    
    # Initialize an empty string to store the extracted text
    text = ''
    
    # Iterate through each page in the PDF
    for page in pdf_document:
        text += page.get_text()
    
    return text

def extract_text_from_doc(file):
    # Load the DOC file using python-docx
    doc = docx.Document(io.BytesIO(file.read()))
    
    # Initialize an empty string to store the extracted text
    text = ''
    
    # Iterate through each paragraph in the DOC file
    for para in doc.paragraphs:
        text += para.text + '\n'
    
    return text