package dev.wwa;

import dev.wwa.domain.User;
import dev.wwa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    private final UserService userService;

    @Autowired
    public Controller(UserService userService) {
        this.userService = userService;
    }


    @PostMapping ("/login")
    public String loginVerify(@RequestBody loginVO loginVO) {
        User user = userService.findOneUser(loginVO.getEmail());
        if (user != null) {
            return "success";
        }
        else {
            return null;
        }
    }

    @PostMapping ("/register")
    public String register(@RequestBody registerVO registerVO) {
        User user = new User();
        user.setEmail(registerVO.getEmail());
        user.setPassword(registerVO.getPassword());
        user.setName(registerVO.getName());
        user.setPhone(registerVO.getPhone());
        userService.join(user);
        if (userService.findOneUser(registerVO.getEmail()) != null) {
            return "success";
        } else {
            return null;
        }
    }


}
