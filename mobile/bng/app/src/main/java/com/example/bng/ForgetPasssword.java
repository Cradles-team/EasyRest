package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

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
                if (isTextViewsAreValid()) {
                    Toast.makeText(getApplicationContext(), "Check Email!", Toast.LENGTH_SHORT).show();
                    Intent next = new Intent(ForgetPasssword.this, EnterCode.class);
                    startActivity(next);
                } else {
                    Toast.makeText(getApplicationContext(), "PROBLEMA!", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    private boolean isTextViewsAreValid () {
        if (poshta3.getText().toString().isEmpty() || !poshta3.getText().toString().contains("@gmail.com")) {
            return false;
        } else {
            return true;
        }
    }

}