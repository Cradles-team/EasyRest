package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import java.util.regex.Pattern;


public class Register extends AppCompatActivity {
    private static final Pattern PASSWORD_PATTERN =
            Pattern.compile("^" +
                    //"(?=.*[0-9])" +         //at least 1 digit
                    //"(?=.*[a-z])" +         //at least 1 lower case letter
                    //"(?=.*[A-Z])" +         //at least 1 upper case letter
                    "(?=.*[a-zA-Z])" +      //any letter
                    "(?=.*[@#$%^&+=])" +    //at least 1 special character
                    "(?=\\S+$)" +           //no white spaces
                    ".{4,}" +               //at least 4 characters
                    "$");

    Button logIn;
    TextView poshta;
    TextView password;
    TextView name;
    TextView confirmPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        logIn = findViewById(R.id.login);
        poshta = findViewById(R.id.poshta);
        password = findViewById(R.id.password);
        name = findViewById(R.id.name);
        confirmPassword = findViewById(R.id.confirmPassword);
        Button SingIn = findViewById(R.id.button);
        logIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();

            }
        });
        SingIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (validateEmail() && validateUsername() && validatePassword() && validateConfirmPassword()) {
                Toast.makeText(getApplicationContext(), "Congratulations!", Toast.LENGTH_SHORT).show();
                Intent Cong = new Intent(Register.this, Draw.class);
                startActivity(Cong);
                } else {
                    Toast.makeText(getApplicationContext(), "PROBLEMA!", Toast.LENGTH_SHORT).show();
                }

            }
        });
    }

    private boolean validateEmail() {
        String emailInput = poshta.getText().toString().trim();
        if (emailInput.isEmpty()) {
            poshta.setError("Field can't be empty");
            return false;
        } else if (!Patterns.EMAIL_ADDRESS.matcher(emailInput).matches()) {
            poshta.setError("Please enter a valid email address");
            return false;
        } else {
            poshta.setError(null);
            return true;
        }
    }

    private boolean validateUsername() {
        String usernameInput = name.getText().toString().trim();
        if (usernameInput.isEmpty()) {
            name.setError("Field can't be empty");
            return false;
        } else if (usernameInput.length() > 15) {
            name.setError("Username too long");
            return false;
        } else {
            name.setError(null);
            return true;
        }
    }

    private boolean validatePassword() {
        String passwordInput = password.getText().toString().trim();
        if (passwordInput.isEmpty()) {
            password.setError("Field can't be empty");
            return false;
        } else if (!PASSWORD_PATTERN.matcher(passwordInput).matches()) {
            password.setError("Password too weak");
            return false;
        } else {
            password.setError(null);
            return true;
        }
    }
    private boolean validateConfirmPassword() {
        String passwordInput = confirmPassword.getText().toString().trim();
        if (passwordInput.isEmpty()) {
            confirmPassword.setError("Field can't be empty");
            return false;
        } else if (!password.getText().toString().equals(confirmPassword.getText().toString())) {
            confirmPassword.setError("Not matches");
            return false;
        } else {
            confirmPassword.setError(null);
            return true;
        }
    }
}

