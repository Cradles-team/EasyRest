package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Kebab extends AppCompatActivity {

    Button y;
    Button button6;
    Button button7;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.kebab);

        y = findViewById(R.id.y);
        button6 = findViewById(R.id.button21);
        button7 = findViewById(R.id.button22);
        y.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        button6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/place/%D0%9A%D0%B5%D0%B1%D0%B0%D0%B1+%D0%A8%D0%B5%D1%84+%2F+Kebab+Chef/@49.8370839,24.0148131,16z/data=!4m8!1m2!2m1!1z0LrQtdCx0LDQsSDRiNC10YQg0LzQtdC90Y4!3m4!1s0x0:0x6fe6197cb8701897!8m2!3d49.8397011!4d24.0235417?hl=ru"));
                startActivity(browserIntent);
            }
        });

        button7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/place/Kebab+Chef/@49.8371254,24.0148024,16z/data=!4m8!1m2!2m1!1z0LrQtdCx0LDQsSDRiNC10YQg0LzQtdC90Y4!3m4!1s0x0:0x12ea53760e0f3c5e!8m2!3d49.8344672!4d24.0148392?hl=ru"));
                startActivity(browserIntent);
            }
        });

    }
}
