import { mount } from "@vue/test-utils";
import FavScholarshipItem from "../components/FavScholarshipItem/FavScholarshipItem";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import StarRating from "vue-star-rating";

describe("FavScholarshipItem", () => {
  it("button remove should call removeFavorite method", () => {
    const wrapper = mount(FavScholarshipItem, {
      stubs: { FontAwesomeIcon, StarRating },
      propsData: {
        item: {
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
      }
    });

    const removeFavorite = jest.fn();

    wrapper.setMethods({ removeFavorite });

    wrapper.find(".scholarship__button").trigger("click");

    expect(removeFavorite).toBeCalled();
  });

  it("removeFavorite should emit event properly", () => {
    const wrapper = mount(FavScholarshipItem, {
      stubs: { FontAwesomeIcon },
      propsData: {
        item: {
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
      }
    });

    wrapper.vm.$emit("removeFavorite", 1);

    expect(wrapper.emitted().removeFavorite).toBeTruthy();
    expect(wrapper.emitted().removeFavorite[0]).toEqual([1]);
  });
});
