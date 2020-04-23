package com.example.bng.ui.home;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.bng.BuildConfig;
import com.example.bng.Chelentano;
import com.example.bng.Keb;
import com.example.bng.Kebab;
import com.example.bng.LvivCroissants;
import com.example.bng.Pizza;
import com.example.bng.R;
import com.example.bng.Restaurants;

public class HomeFragment extends Fragment {

    private HomeViewModel homeViewModel;
    ImageButton chelentano;
    ImageButton kebab;
    ImageButton lvivcroisants;
    Button res;
    Button keb;
    Button pizza;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, final Bundle savedInstanceState) {
        homeViewModel =
                ViewModelProviders.of(this).get(HomeViewModel.class);
        View root = inflater.inflate(R.layout.fragment_home, container, false);
        chelentano = root.findViewById(R.id.chelentano);
        kebab = root.findViewById(R.id.kebab);
        lvivcroisants = root.findViewById(R.id.lvivcroisants);
        res = root.findViewById(R.id.res);
        keb = root.findViewById(R.id.keb);
        pizza = root.findViewById(R.id.pizza);
        final TextView textView = root.findViewById(R.id.text_home);
        homeViewModel.getText().observe(this, new Observer<String>() {
            @Override
            public void onChanged(@Nullable String s) {
                textView.setText(s);
            }
        });
        chelentano.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getActivity(), Chelentano.class));
            }
        });
        kebab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getActivity(), Kebab.class));
            }
        });
        lvivcroisants.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getActivity(), LvivCroissants.class));
            }
        });
        res.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getActivity(), Restaurants.class));
            }
        });
        keb.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getActivity(), Keb.class));
            }
        });
        pizza.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getActivity(), Pizza.class));
            }
        });


        return root;
    }

}