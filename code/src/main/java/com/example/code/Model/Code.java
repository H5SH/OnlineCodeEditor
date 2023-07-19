package com.example.code.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Code")
public class Code {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  public Integer id;

  private String name;

  private String css_code;

  private String html_code;

  private String js_code;


  public String getCss_code() {
    return css_code;
  }

  public void setCss_code(String css_code) {
    this.css_code = css_code;
  }

  public String getHtml_code() {
    return html_code;
  }

  public void setHtml_code(String html_code) {
    this.html_code = html_code;
  }

  public String getJs_code() {
    return js_code;
  }

  public void setJs_code(String js_code) {
    this.js_code = js_code;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  
}
