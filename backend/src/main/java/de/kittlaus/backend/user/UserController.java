package de.kittlaus.backend.user;


import de.kittlaus.backend.models.user.MyUser;
import de.kittlaus.backend.models.user.MyUserDto;
import de.kittlaus.backend.models.user.TrainerUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<MyUserDto> createUser(@RequestBody MyUser user) {
        return userService.checkAndCreate(user);
    }

    @GetMapping("/me")
    public ResponseEntity<MyUserDto> me(Principal principal) {
        TrainerUser byUsername = userService.findByUsername(principal.getName()).orElseThrow();
        Optional<MyUserDto> dto = Optional.of(MyUserDto.builder().username(byUsername.getUsername()).role(byUsername.getRole()).build());
        return ResponseEntity.of(dto);
    }



}
