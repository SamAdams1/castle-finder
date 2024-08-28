package io.sama.castle_finder;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CastleController {

  private final CastleRepository castleRepository;

  public CastleController(CastleRepository castleRepository) {
    this.castleRepository = castleRepository;
  }

  @RequestMapping("/castles")
  public List<Castle> retrieveAllCastles() {
    return Arrays.asList(
        new Castle(1, "Hogwarts", new Double[] { 14.0, 15.0 }),
        new Castle(2, "Narnia", new Double[] { 1.0, 4.0 })

    );
  }

  @RequestMapping("/test")
  public Iterable<Castle> getAllCastles() {
    return this.castleRepository.findAll();
  }

}
