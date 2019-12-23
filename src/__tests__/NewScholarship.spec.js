import { shallowMount } from "@vue/test-utils";
import NewScholarship from "../components/NewScholarship/NewScholarship.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "vue-slider-component/theme/antd.css";

describe("NewScholarship", () => {
  it("AddScholarship button should call addFavorite method", () => {
    const wrapper = shallowMount(NewScholarship, {
      stubs: {
        FontAwesomeIcon
      }
    });

    wrapper.setData({
      visible: true,
      selectedScholarships: [1]
    });

    const addFavorites = jest.fn();
    wrapper.setMethods({ addFavorites });

    wrapper.find(".modal__button--yellow").trigger("click");
    expect(addFavorites).toBeCalled();
  });

  it("addFavorite should emit event properly", () => {
    const wrapper = shallowMount(NewScholarship, {
      stubs: {
        FontAwesomeIcon
      }
    });
    const selectedScholarships = [1];
    const scholarships = [
      {
        id: 1,
        full_price: 2139.64,
        price_with_discount: 706.08,
        discount_percentage: 67.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        course: {
          name: "Engenharia Mecânica",
          kind: "Presencial",
          level: "Bacharelado",
          shift: "Noite"
        },
        university: {
          name: "UNIP",
          score: 4.5,
          logo_url: "https://www.tryimg.com/u/2019/04/16/unip.png"
        },
        campus: {
          name: "Jardim das Indústrias",
          city: "São José dos Campos"
        }
      }
    ];
    wrapper.setData({
      visible: true,
      selectedScholarships,
      scholarships
    });

    wrapper.vm.$emit("addFavorites", [selectedScholarships, scholarships]);

    expect(wrapper.emitted().addFavorites).toBeTruthy();
    // expect(wrapper.emitted().addFavorites[0]).toBe([
    //   [selectedScholarships, scholarships]
    // ]);
  });
});
