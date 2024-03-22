class Provider :
    def __init__(self, email, password, first_name, last_name, profile_info):
        self.email = email
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.type = "provider"
        self.profile_info = profile_info