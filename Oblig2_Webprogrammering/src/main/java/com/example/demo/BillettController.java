package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    // lager en liste med billettene i en ArrayList
    private final List<Billett> alleBilletter = new ArrayList<>();


    @PostMapping("/lagBillett")
    public void lagreBillett (Billett innBillett) {
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle() {
        return alleBilletter;
    }

    @PostMapping("/slettAlle")
    public void slettBilletter() {
        alleBilletter.clear();
    }
}
