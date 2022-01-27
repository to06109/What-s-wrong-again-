package dev.wwa.repository;

import dev.wwa.domain.User;

import java.util.List;

public interface UserRepository {

    public void save(User user);

    public User findOne(Long id);

    public List<User> findAll();

    public User findByEmail(String email);

    public void modifyPassword(Long id, String password);

    public void modifyName(Long id, String name);

    public void modifyProfilePic(Long id, String profile_pic_path);

    public void modifyPhone(Long id, String phone);

    public void modify(User user);

    public void delete(Long id);
}
