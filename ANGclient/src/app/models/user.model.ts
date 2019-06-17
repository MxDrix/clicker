export interface UserModel {
    _id?: String,
    email: String,
    firstname: String,
    lastname: String,
    password?: String,
    securePassword?: String,
    creationDate?: String,
    lastConnection?: String
}