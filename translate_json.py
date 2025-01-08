import json
from deep_translator import GoogleTranslator

# Caminho do arquivo JSON
file_path = r"C:\Users\User\Downloads\Schweiz.json"

# Função para dividir textos longos
def split_text(text, max_chars=5000):
    return [text[i:i + max_chars] for i in range(0, len(text), max_chars)]

# Função para traduzir strings dentro da estrutura JSON
def translate_content(data, source_lang='auto', target_lang='fr'):
    if isinstance(data, dict):  # Se for um dicionário
        return {key: translate_content(value, source_lang, target_lang) for key, value in data.items()}
    elif isinstance(data, list):  # Se for uma lista
        return [translate_content(item, source_lang, target_lang) for item in data]
    elif isinstance(data, str):  # Se for uma string
        try:
            if len(data) > 5000:
                print(f"Texto longo identificado ({len(data)} caracteres). Dividindo em pedaços...")
                chunks = split_text(data)
                translated_chunks = [GoogleTranslator(source=source_lang, target=target_lang).translate(chunk) for chunk in chunks]
                return ''.join(translated_chunks)
            else:
                return GoogleTranslator(source=source_lang, target=target_lang).translate(data)
        except Exception as e:
            print(f"Erro ao traduzir o texto: {data[:50]}... | Erro: {e}")
            return data  # Retorna o texto original em caso de erro
    else:  # Para outros tipos de dados (não traduzíveis)
        return data

# Carregar o conteúdo do arquivo JSON
try:
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
except Exception as e:
    print(f"Erro ao carregar o arquivo JSON: {e}")
    exit()

# Traduzir o conteúdo JSON
try:
    translated_data = translate_content(data)
except Exception as e:
    print(f"Erro ao traduzir o conteúdo JSON: {e}")
    exit()

# Salvar o conteúdo traduzido em um novo arquivo JSON
output_path = r"C:\Users\User\Downloads\Schweiz_translated.json"
try:
    with open(output_path, 'w', encoding='utf-8') as file:
        json.dump(translated_data, file, ensure_ascii=False, indent=4)
    print(f"Arquivo traduzido salvo em: {output_path}")
except Exception as e:
    print(f"Erro ao salvar o arquivo traduzido: {e}")
