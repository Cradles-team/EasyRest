package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class LvivCroissants extends AppCompatActivity {

    Button y;
    Button button21;
    Button button22;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lviv_croissants);

        y = findViewById(R.id.y);
        button21 = findViewById(R.id.button21);
        button22 = findViewById(R.id.button22);
        y.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        button21.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/place/Lviv+Croissants/@49.8371252,24.0148024,16z/data=!4m8!1m2!2m1!1slviv+croissants!3m4!1s0x0:0xb28bbd0636b467b5!8m2!3d49.834475!4d24.0150565?hl=ru"));
                startActivity(browserIntent);
            }
        });

        button22.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/place/Lviv+Croissants/@49.8371389,24.0148024,16z/data=!4m8!1m2!2m1!1slviv+croissants!3m4!1s0x0:0x34abd45a03d226d7!8m2!3d49.8391!4d24.0098973?hl=ru"));
                startActivity(browserIntent);
            }
        });
    }
}
