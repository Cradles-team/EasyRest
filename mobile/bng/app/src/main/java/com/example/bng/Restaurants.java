package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;

public class Restaurants extends AppCompatActivity {

    Button y3;
    ImageButton lvivcroisants2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_restaurants);

        y3 = findViewById(R.id.y3);
        lvivcroisants2 = findViewById(R.id.lvivcroisants2);
        y3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        lvivcroisants2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent restaurantsIntent = new Intent(Restaurants.this, LvivCroissants.class);
                startActivity(restaurantsIntent);
            }
        });
    }
}
