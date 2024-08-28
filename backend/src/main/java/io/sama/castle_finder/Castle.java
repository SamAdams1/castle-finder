package io.sama.castle_finder;

import java.util.Arrays;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "castles")
public class Castle {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  private String name;
  private Double[] latLon;

  public Castle() {
  }

  public Castle(int id, String name, Double[] latLon) {
    this.id = id;
    this.name = name;
    this.latLon = latLon;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public Double[] getLatLon() {
    return latLon;
  }

  @Override
  public String toString() {
    return "Castle [id=" + id + ", name=" + name + ", latLon=" + Arrays.toString(latLon) + "]";
  }

}
