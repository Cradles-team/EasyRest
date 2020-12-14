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

public class ForgetPasssword extends AppCompatActivity {
    Button y12;
    TextView poshta3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forget_passsword);
        y12 = findViewById(R.id.y12);
        poshta3 = findViewById(R.id.poshta3);
        y12.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });


        Button ForPass = findViewById(R.id.button17);
        ForPass.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (validateEmail()) {
                    Toast.makeText(getApplicationContext(), "Check Email!", Toast.LENGTH_LONG).show();
                    Intent next = new Intent(ForgetPasssword.this, Login.class);
                    startActivity(next);
                } else {
                    Toast.makeText(getApplicationContext(), "PROBLEMA!", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    private boolean validateEmail() {
        String emailInput = poshta3.getText().toString().trim();
        if (emailInput.isEmpty()) {
            poshta3.setError("Field can't be empty");
            return false;
        } else if (!Patterns.EMAIL_ADDRESS.matcher(emailInput).matches()) {
            poshta3.setError("Please enter a valid email address");
            return false;
        } else {
            poshta3.setError(null);
            return true;
        }
    }



}