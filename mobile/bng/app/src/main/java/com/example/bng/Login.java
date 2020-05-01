package com.example.bng;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

public class Login extends AppCompatActivity {
    Button register;
    TextView poshta;
    TextView password;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login);
        register = findViewById(R.id.register);
        poshta = findViewById(R.id.poshta);
        password = findViewById(R.id.password);
        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent Register = new Intent(Login.this, Register.class);
                startActivity(Register);

            }
        });
        Button SingIn = findViewById(R.id.button);
        SingIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (isTextViewsAreValid()) {
                    Toast.makeText(getApplicationContext(), "Congratulations!", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(Login.this, Draw.class);
                    startActivity(intent);
                } else {
                    Toast.makeText(getApplicationContext(), "PROBLEMA!", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

        private boolean isTextViewsAreValid () {
            if (poshta.getText().toString().isEmpty() || password.getText().toString().isEmpty() || !poshta.getText().toString().contains("@gmail.com")) {
                return false;
            } else {
                return true;
            }
        }
}