package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class User {

    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

//    @Id
    private String email;

    private String password;

    private String name;

    private String profile_pic_path;

    private String phone;

    @ManyToMany(mappedBy = "users")
    private List<Error> errors = new ArrayList<>();

    @ManyToMany(mappedBy = "users")
    private List<Solution> solutions = new ArrayList<>();

}
