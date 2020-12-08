package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;


public class EnterCode extends AppCompatActivity {
    TextView emailcode;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_enter_code);
        emailcode = findViewById(R.id.emailcode);

        Button ForPass = findViewById(R.id.button18);
        ForPass.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                if (isTextViewsAreValid()) {
                    Toast.makeText(getApplicationContext(), "Create New Password!", Toast.LENGTH_SHORT).show();
                    Intent next = new Intent(EnterCode.this, NewPassword.class);
                    startActivity(next);
                } else {
                    Toast.makeText(getApplicationContext(), "PROBLEMA!", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    private boolean isTextViewsAreValid () {
        if (emailcode.getText().toString().isEmpty() || !emailcode.getText().toString().contains("12345")) {
            return false;
        } else {
            return true;
        }
    }


}