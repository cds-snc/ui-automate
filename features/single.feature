Feature: GC Forms landing page
  As a user of GC Forms
  I want to land on GC forms welcome page
  So that I can fill out a form

  Scenario: Rendering GC Forms landing page
    When I navigate to GC forms
    Then I should see title "GC Forms - Formulaires GC"
