package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class Register extends AppCompatActivity {
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
                if (isTextViewsAreValid()) {
                Toast.makeText(getApplicationContext(), "Congratulations!", Toast.LENGTH_SHORT).show();
                Intent Cong = new Intent(Register.this, Draw.class);
                startActivity(Cong);
                } else {
                    Toast.makeText(getApplicationContext(), "PROBLEMA!", Toast.LENGTH_SHORT).show();
                }

            }
        });
    }
    private boolean isTextViewsAreValid () {
        if (poshta.getText().toString().isEmpty() || password.getText().toString().isEmpty() || name.getText().toString().isEmpty() || confirmPassword.getText().toString().isEmpty()) {
            return false;
        } else {
            return true;
        }
    }
}

