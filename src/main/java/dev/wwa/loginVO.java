package dev.wwa;

public class loginVO {

    private String email;
    private String password;
    private String name;
    private String phone;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public String toString() {
        return "loginVO{"
                + "email='"
                + email
                + '\''
                + ", password='"
                + password
                + '}';
    }
}
