require "application_system_test_case"

class BedsTest < ApplicationSystemTestCase
  setup do
    @bed = beds(:one)
  end

  test "visiting the index" do
    visit beds_url
    assert_selector "h1", text: "Beds"
  end

  test "should create bed" do
    visit beds_url
    click_on "New bed"

    fill_in "Bedspace", with: @bed.bedspace_id
    fill_in "Occupant campaign", with: @bed.occupant_campaign
    fill_in "Occupant email", with: @bed.occupant_email
    fill_in "Occupant firstname", with: @bed.occupant_firstname
    fill_in "Occupant lastname", with: @bed.occupant_lastname
    fill_in "Room", with: @bed.room_id
    fill_in "Status", with: @bed.status
    click_on "Create Bed"

    assert_text "Bed was successfully created"
    click_on "Back"
  end

  test "should update Bed" do
    visit bed_url(@bed)
    click_on "Edit this bed", match: :first

    fill_in "Bedspace", with: @bed.bedspace_id
    fill_in "Occupant campaign", with: @bed.occupant_campaign
    fill_in "Occupant email", with: @bed.occupant_email
    fill_in "Occupant firstname", with: @bed.occupant_firstname
    fill_in "Occupant lastname", with: @bed.occupant_lastname
    fill_in "Room", with: @bed.room_id
    fill_in "Status", with: @bed.status
    click_on "Update Bed"

    assert_text "Bed was successfully updated"
    click_on "Back"
  end

  test "should destroy Bed" do
    visit bed_url(@bed)
    click_on "Destroy this bed", match: :first

    assert_text "Bed was successfully destroyed"
  end
end
