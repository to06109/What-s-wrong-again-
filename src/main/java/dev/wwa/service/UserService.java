package dev.wwa.service;

import dev.wwa.domain.User;

import java.util.List;

public interface UserService {

    public Long join(User user);

    public User findOneUser(String email);

    public List<User> findUsers();

    public User modifyUserInfo(User user);

    public User modifyUserName(Long id, String name);

    public User modifyUserPassword(Long id, String password);

    public User modifyUserProfilePic(Long id, String path);

    public User modifyUserPhone(Long id, String phone);

    public void deleteAccount(Long id);
}
