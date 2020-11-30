package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;

public class Keb extends AppCompatActivity {
    Button y2;
    ImageButton kebab2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_keb);
        y2 = findViewById(R.id.y2);
        kebab2 = findViewById(R.id.kebab2);
        y2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        kebab2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent restaurantsIntent = new Intent(Keb.this, Kebab.class);
                startActivity(restaurantsIntent);
            }
        });
    }
}
