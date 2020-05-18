package com.example.bng;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Chelentano extends AppCompatActivity {

    Button y;
    Button button4;
    Button button5;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chelentano);

        y = findViewById(R.id.y);
        button4 = findViewById(R.id.button4);
        button5 = findViewById(R.id.button5);
        y.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        button4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/place/%D0%9F%D1%96%D1%86%D0%B5%D1%80%D1%96%D1%8F+%D0%A7%D0%B5%D0%BB%D0%B5%D0%BD%D1%82%D0%B0%D0%BD%D0%BE/@49.8374449,24.034183,17.25z/data=!4m5!3m4!1s0x473add6915e17399:0xa79a1553ca0651aa!8m2!3d49.8371837!4d24.034699"));
                startActivity(browserIntent);
            }
        });

        button5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/place/%D0%A7%D0%B5%D0%BB%D0%B5%D0%BD%D1%82%D0%B0%D0%BD%D0%BE/@49.8404446,24.0325176,17.25z/data=!4m5!3m4!1s0x473add6dca0b74d3:0x6374237e4d983f78!8m2!3d49.8410157!4d24.0312081"));
                startActivity(browserIntent);
            }
        });

    }
}
