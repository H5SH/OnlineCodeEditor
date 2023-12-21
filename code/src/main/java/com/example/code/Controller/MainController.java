package com.example.code.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.code.Model.Code;
import com.example.code.dao.CodeRepo;

@CrossOrigin("http://localhost:3000/")
@RestController
public class MainController {

    @Autowired
    CodeRepo repo;

    @PostMapping("/saved")
    public Code home(Code code){
        repo.save(code);
        return code;
    }

    @GetMapping("/Editor")
    public List<Code> editor(){
        return repo.findAll();
    }

    @PutMapping("/update")
    public String Update(@RequestParam int id)
    {
        Optional<Code> c=repo.findById(id);
        if(c.isPresent())
        {
            Code o = c.get();
            repo.deleteById(id);
            repo.save(o);
            return "Updated";
        }
        else{
            return "Wrong id";
        }
    }

    @DeleteMapping("/delete/{id}")
    public Code delete(@PathVariable int id){
        Code c = repo.findById(id).orElseThrow();
        repo.delete(c);
        return c;
    }
    
}
