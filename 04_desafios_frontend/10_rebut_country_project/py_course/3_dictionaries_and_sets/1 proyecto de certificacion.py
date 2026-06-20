def add_setting(settings_dict, tuple):
    key_lower = tuple[0].lower()
    value_lower = tuple[1].lower()
    if key_lower in settings_dict.keys():
        return f"Setting '{key_lower}' already exists! Cannot add a new setting with this name."
    else:
        settings_dict[key_lower] = value_lower
        return f"Setting '{key_lower}' added with value '{value_lower}' successfully!"

test_settings = {
    'Key 1': "Value 1",
    'Key 2': "Value 2",
    'Key 3': "Value 3",
    'clave 5': 'testing value'
}

def update_setting(settings_dict, tuple):
    tuple_key = tuple[0].lower()
    tuple_value = tuple[1].lower()
    if tuple_key in settings_dict.keys():
        settings_dict[tuple_key] = tuple_value
        return f"Setting '{tuple_key}' updated to '{tuple_value}' successfully!"
    else:
        return f"Setting '{tuple_key}' does not exist! Cannot update a non-existing setting."

def delete_setting(settings_dict, key):
    key_lower = key.lower()
    if key_lower in settings_dict.keys():
        settings_dict.pop(key_lower)
        return f"Setting '{key_lower}' deleted successfully!"
    else:
        return f"Setting not found!"

def view_settings(settings_dict):
    if len(settings_dict) == 0:
        return "No settings available."
    else:
        msg = "Current User Settings:\n"
        for key, value in settings_dict.items():
            msg += f"{key.capitalize()}: {value}\n"
        return msg