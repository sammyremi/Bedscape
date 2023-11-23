require "test_helper"

class BedsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bed = beds(:one)
  end

  test "should get index" do
    get beds_url
    assert_response :success
  end

  test "should get new" do
    get new_bed_url
    assert_response :success
  end

  test "should create bed" do
    assert_difference("Bed.count") do
      post beds_url, params: { bed: { bedspace_id: @bed.bedspace_id, occupant_campaign: @bed.occupant_campaign, occupant_email: @bed.occupant_email, occupant_firstname: @bed.occupant_firstname, occupant_lastname: @bed.occupant_lastname, room_id: @bed.room_id, status: @bed.status } }
    end

    assert_redirected_to bed_url(Bed.last)
  end

  test "should show bed" do
    get bed_url(@bed)
    assert_response :success
  end

  test "should get edit" do
    get edit_bed_url(@bed)
    assert_response :success
  end

  test "should update bed" do
    patch bed_url(@bed), params: { bed: { bedspace_id: @bed.bedspace_id, occupant_campaign: @bed.occupant_campaign, occupant_email: @bed.occupant_email, occupant_firstname: @bed.occupant_firstname, occupant_lastname: @bed.occupant_lastname, room_id: @bed.room_id, status: @bed.status } }
    assert_redirected_to bed_url(@bed)
  end

  test "should destroy bed" do
    assert_difference("Bed.count", -1) do
      delete bed_url(@bed)
    end

    assert_redirected_to beds_url
  end
end
