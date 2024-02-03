package com.bonarson_dev.bonarson_spring_boot.model;

public class Client {
    private String email;
    private String password;

    public Client(String email, String password) {
        this.email = email;
        this.password = password;
    }


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
        return "Client{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
