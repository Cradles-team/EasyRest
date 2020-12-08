package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class NewPassword extends AppCompatActivity {
    TextView newpass;
    TextView repeatpass;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_new_password);
        newpass = findViewById(R.id.newpass);
        repeatpass = findViewById(R.id.repeatpass);

        Button SingIn = findViewById(R.id.button19);
        SingIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (isTextViewsAreValid()) {
                    Toast.makeText(getApplicationContext(), "Congratulations!", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(NewPassword.this, Draw.class);
                    startActivity(intent);
                } else {
                    Toast.makeText(getApplicationContext(), "PROBLEMA!", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    private boolean isTextViewsAreValid () {
        if (newpass.getText().toString().isEmpty() || repeatpass.getText().toString().isEmpty()) {
            return false;
        } else {
            return true;
        }
    }
}