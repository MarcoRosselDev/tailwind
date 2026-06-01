full_dot = '●'
empty_dot = '○'

def create_character(char, strength, intelligence, charisma):
  is_string = isinstance(char, str)
  strength_int = isinstance(strength, int)
  intelligence_int = isinstance(intelligence, int)
  charisma_int = isinstance(charisma, int)

  if not is_string:
    return "The character name should be a string"
  elif len(char) == 0:
    return "The character should have a name"
  elif len(char) > 10:
    return "The character name is too long"
  elif " " in char:
    return "The character name should not contain spaces"
  elif not strength_int or not intelligence_int or not charisma_int:
    return "All stats should be integers"
  elif strength < 1 or intelligence < 1 or charisma < 1 :
    return "All stats should be no less than 1"
  elif strength > 4 or intelligence > 4 or charisma > 4 :
    return "All stats should be no more than 4"
  elif strength + intelligence + charisma != 7:
    return "The character should start with 7 points"
  else:
    return f"{char}\nSTR {strength*full_dot + (10-strength)*empty_dot}\nINT {intelligence*full_dot + (10-intelligence)*empty_dot}\nCHA {charisma*full_dot + (10-charisma)*empty_dot}"

  