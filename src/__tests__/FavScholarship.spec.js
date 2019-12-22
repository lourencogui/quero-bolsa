import { shallowMount } from "@vue/test-utils";
import FavScholarship from "../components/favScholarship/FavScholarship";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

describe("FavScholarship", () => {
  it("component render properly", () => {
    const wrapper = shallowMount(FavScholarship, {
      stubs: {
        FontAwesomeIcon
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("function removeItem should remove one item from favorite array", () => {
    const wrapper = shallowMount(FavScholarship, {
      stubs: {
        FontAwesomeIcon
      }
    });
    const favoriteArr = [
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
      },
      {
        id: 2,
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
      favoriteScholarships: favoriteArr,
      filteredFavoriteScholarships: favoriteArr
    });
    wrapper.vm.removeFavorite(1);
    expect(wrapper.vm.favoriteScholarships.length).toBe(1);
  });
});
