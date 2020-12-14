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
import org.w3c.dom.Text;

public class Login extends AppCompatActivity {
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

    Button register;
    TextView poshta;
    TextView password;
    TextView forgetpass;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login);
        register = findViewById(R.id.register);
        poshta = findViewById(R.id.poshta);
        password = findViewById(R.id.password);
        forgetpass = findViewById(R.id.forgetpass);

        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent Register = new Intent(Login.this, Register.class);
                startActivity(Register);

            }
        });

        forgetpass.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent Register = new Intent(Login.this, ForgetPasssword.class);
                startActivity(Register);

            }
        });


        Button SingIn = findViewById(R.id.button);
        SingIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (validateEmail() && validatePassword()) {
                    Toast.makeText(getApplicationContext(), "Congratulations!", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(Login.this, Draw.class);
                    startActivity(intent);
                }
                else {
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
        
}