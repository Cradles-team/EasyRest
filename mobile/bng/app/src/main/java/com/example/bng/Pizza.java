package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;

public class Pizza extends AppCompatActivity {
    Button y3;
    ImageButton chelentano2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pizza);

        // Ініціалізація змінних тут
        y3 = findViewById(R.id.y3);
        chelentano2 = findViewById(R.id.chelentano2);

        // Виклик методу на проініціалізованій змінній.
        y3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        chelentano2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent restaurantsIntent = new Intent(Pizza.this, Chelentano.class);
                startActivity(restaurantsIntent);
            }
        });
    }
}
