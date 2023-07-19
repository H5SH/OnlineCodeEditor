package com.example.code.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import com.example.code.Model.Code;

public interface CodeRepo extends JpaRepository<Code, Integer>
{
    
}
