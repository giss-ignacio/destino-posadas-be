const axios = require("axios");

let obj = {
  hotel1: {
    hotel_id: 291801,
    score_breakdown: [
      {
        question: [
          {
            question: "hotel_clean",
            count: 204,
            score: 7.9,
            localized_question: "Cleanliness",
            score_comparison_to_ufi_average: 0,
          },
          {
            localized_question: "Comfort",
            score_comparison_to_ufi_average: -1,
            question: "hotel_comfort",
            count: 201,
            score: 7.4,
          },
          {
            question: "hotel_services",
            score: 7.4,
            count: 204,
            localized_question: "Facilities",
            score_comparison_to_ufi_average: 0,
          },
          {
            localized_question: "Location",
            score_comparison_to_ufi_average: 0,
            question: "hotel_location",
            score: 9.2,
            count: 205,
          },
          {
            count: 205,
            score: 8.2,
            question: "hotel_staff",
            score_comparison_to_ufi_average: 0,
            localized_question: "Staff",
          },
          {
            localized_question: "Total",
            score_comparison_to_ufi_average: 0,
            question: "total",
            count: 206,
            score: 7.6,
          },
          {
            localized_question: "Value for money",
            score_comparison_to_ufi_average: -1,
            question: "hotel_value",
            count: 203,
            score: 7.3,
          },
          {
            count: 55,
            score: 6.8,
            question: "hotel_wifi",
            score_comparison_to_ufi_average: -1,
            localized_question: "WiFi",
          },
        ],
        count: 206,
        average_score: "7.7",
        from_year: 2019,
        customer_type: "review_category_business_travellers",
      },
      {
        question: [
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Cleanliness",
            score: 7.5,
            count: 54,
            question: "hotel_clean",
          },
          {
            question: "hotel_comfort",
            score: 7.5,
            count: 54,
            localized_question: "Comfort",
            score_comparison_to_ufi_average: 0,
          },
          {
            score: "7.0",
            count: 54,
            question: "hotel_services",
            score_comparison_to_ufi_average: -1,
            localized_question: "Facilities",
          },
          {
            localized_question: "Location",
            score_comparison_to_ufi_average: 0,
            question: "hotel_location",
            count: 54,
            score: 9.3,
          },
          {
            localized_question: "Staff",
            score_comparison_to_ufi_average: 0,
            question: "hotel_staff",
            score: 8.5,
            count: 54,
          },
          {
            localized_question: "Total",
            score_comparison_to_ufi_average: 0,
            question: "total",
            count: 54,
            score: 7.8,
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Value for money",
            score: 7.6,
            count: 54,
            question: "hotel_value",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "WiFi",
            score: 7.5,
            count: 1,
            question: "hotel_wifi",
          },
        ],
        count: 54,
        average_score: "7.8",
        from_year: 2019,
        customer_type: "with_friends",
      },
      {
        average_score: "7.7",
        customer_type: "couple",
        from_year: 2019,
        question: [
          {
            question: "hotel_clean",
            score: 7.7,
            count: 473,
            localized_question: "Cleanliness",
            score_comparison_to_ufi_average: 0,
          },
          {
            count: 474,
            score: 7.3,
            question: "hotel_comfort",
            score_comparison_to_ufi_average: -1,
            localized_question: "Comfort",
          },
          {
            localized_question: "Facilities",
            score_comparison_to_ufi_average: -1,
            question: "hotel_services",
            score: 7.1,
            count: 472,
          },
          {
            question: "hotel_location",
            count: 476,
            score: 9.2,
            localized_question: "Location",
            score_comparison_to_ufi_average: 0,
          },
          {
            question: "hotel_staff",
            score: 8.1,
            count: 477,
            localized_question: "Staff",
            score_comparison_to_ufi_average: 0,
          },
          {
            score: 7.5,
            count: 478,
            question: "total",
            score_comparison_to_ufi_average: 0,
            localized_question: "Total",
          },
          {
            score_comparison_to_ufi_average: -1,
            localized_question: "Value for money",
            count: 474,
            score: 7.3,
            question: "hotel_value",
          },
          {
            score: 7.7,
            count: 30,
            question: "hotel_wifi",
            score_comparison_to_ufi_average: 0,
            localized_question: "WiFi",
          },
        ],
        count: 478,
      },
      {
        from_year: 2019,
        customer_type: "group",
        average_score: "7.7",
        count: 105,
        question: [
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Cleanliness",
            score: 7.6,
            count: 104,
            question: "hotel_clean",
          },
          {
            localized_question: "Comfort",
            score_comparison_to_ufi_average: -1,
            question: "hotel_comfort",
            count: 102,
            score: 7.1,
          },
          {
            score: 7.4,
            count: 104,
            question: "hotel_services",
            score_comparison_to_ufi_average: 0,
            localized_question: "Facilities",
          },
          {
            question: "hotel_location",
            count: 103,
            score: 9.4,
            localized_question: "Location",
            score_comparison_to_ufi_average: 0,
          },
          {
            count: 104,
            score: 8.1,
            question: "hotel_staff",
            score_comparison_to_ufi_average: 0,
            localized_question: "Staff",
          },
          {
            localized_question: "Total",
            score_comparison_to_ufi_average: 0,
            question: "total",
            count: 105,
            score: 7.4,
          },
          {
            localized_question: "Value for money",
            score_comparison_to_ufi_average: 0,
            question: "hotel_value",
            count: 102,
            score: 7.5,
          },
          {
            count: 13,
            score: 6.9,
            question: "hotel_wifi",
            score_comparison_to_ufi_average: -1,
            localized_question: "WiFi",
          },
        ],
      },
      {
        average_score: "7.7",
        from_year: 2019,
        customer_type: "young_couple",
        question: [
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Cleanliness",
            count: 473,
            score: 7.7,
            question: "hotel_clean",
          },
          {
            count: 474,
            score: 7.3,
            question: "hotel_comfort",
            score_comparison_to_ufi_average: -1,
            localized_question: "Comfort",
          },
          {
            localized_question: "Facilities",
            score_comparison_to_ufi_average: -1,
            question: "hotel_services",
            count: 472,
            score: 7.1,
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Location",
            count: 476,
            score: 9.2,
            question: "hotel_location",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Staff",
            score: 8.1,
            count: 477,
            question: "hotel_staff",
          },
          {
            localized_question: "Total",
            score_comparison_to_ufi_average: 0,
            question: "total",
            score: 7.5,
            count: 478,
          },
          {
            score: 7.3,
            count: 474,
            question: "hotel_value",
            score_comparison_to_ufi_average: -1,
            localized_question: "Value for money",
          },
          {
            localized_question: "WiFi",
            score_comparison_to_ufi_average: 0,
            question: "hotel_wifi",
            score: 7.7,
            count: 30,
          },
        ],
        count: 478,
      },
      {
        average_score: "7.7",
        customer_type: "total",
        from_year: 2019,
        question: [
          {
            question: "hotel_clean",
            score: 7.7,
            count: 1151,
            localized_question: "Cleanliness",
            score_comparison_to_ufi_average: 0,
          },
          {
            question: "hotel_comfort",
            score: 7.4,
            count: 1147,
            localized_question: "Comfort",
            score_comparison_to_ufi_average: -1,
          },
          {
            localized_question: "Facilities",
            score_comparison_to_ufi_average: -1,
            question: "hotel_services",
            count: 1151,
            score: 7.2,
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Location",
            count: 1153,
            score: 9.2,
            question: "hotel_location",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Staff",
            count: 1158,
            score: 8.2,
            question: "hotel_staff",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Total",
            count: 1164,
            score: 7.5,
            question: "total",
          },
          {
            question: "hotel_value",
            count: 1151,
            score: 7.3,
            localized_question: "Value for money",
            score_comparison_to_ufi_average: -1,
          },
          {
            localized_question: "WiFi",
            score_comparison_to_ufi_average: -1,
            question: "hotel_wifi",
            score: 7.3,
            count: 109,
          },
        ],
        count: 1164,
      },
      {
        from_year: 2019,
        customer_type: "family",
        average_score: "7.7",
        count: 314,
        question: [
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Cleanliness",
            score: 7.7,
            count: 310,
            question: "hotel_clean",
          },
          {
            count: 309,
            score: 7.3,
            question: "hotel_comfort",
            score_comparison_to_ufi_average: -1,
            localized_question: "Comfort",
          },
          {
            question: "hotel_services",
            count: 310,
            score: 7.1,
            localized_question: "Facilities",
            score_comparison_to_ufi_average: -1,
          },
          {
            question: "hotel_location",
            score: 9.3,
            count: 310,
            localized_question: "Location",
            score_comparison_to_ufi_average: 0,
          },
          {
            question: "hotel_staff",
            score: 8.2,
            count: 311,
            localized_question: "Staff",
            score_comparison_to_ufi_average: 0,
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Total",
            score: 7.5,
            count: 314,
            question: "total",
          },
          {
            score: 7.3,
            count: 311,
            question: "hotel_value",
            score_comparison_to_ufi_average: -1,
            localized_question: "Value for money",
          },
          {
            localized_question: "WiFi",
            score_comparison_to_ufi_average: -1,
            question: "hotel_wifi",
            score: 7.3,
            count: 15,
          },
        ],
      },
      {
        average_score: "7.7",
        from_year: 2019,
        customer_type: "",
        question: [
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Cleanliness",
            count: 158,
            score: 7.6,
            question: "hotel_clean",
          },
          {
            localized_question: "Comfort",
            score_comparison_to_ufi_average: -1,
            question: "hotel_comfort",
            count: 156,
            score: 7.2,
          },
          {
            question: "hotel_services",
            score: 7.3,
            count: 158,
            localized_question: "Facilities",
            score_comparison_to_ufi_average: 0,
          },
          {
            question: "hotel_location",
            score: 9.3,
            count: 157,
            localized_question: "Location",
            score_comparison_to_ufi_average: 0,
          },
          {
            score: 8.3,
            count: 158,
            question: "hotel_staff",
            score_comparison_to_ufi_average: 0,
            localized_question: "Staff",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Total",
            count: 159,
            score: 7.6,
            question: "total",
          },
          {
            localized_question: "Value for money",
            score_comparison_to_ufi_average: 0,
            question: "hotel_value",
            score: 7.5,
            count: 156,
          },
          {
            score_comparison_to_ufi_average: -1,
            localized_question: "WiFi",
            score: "7.0",
            count: 14,
            question: "hotel_wifi",
          },
        ],
        count: 159,
      },
      {
        count: 213,
        question: [
          {
            score: "8.0",
            count: 210,
            question: "hotel_clean",
            score_comparison_to_ufi_average: 0,
            localized_question: "Cleanliness",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Comfort",
            score: 7.6,
            count: 208,
            question: "hotel_comfort",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Facilities",
            score: 7.4,
            count: 211,
            question: "hotel_services",
          },
          {
            count: 210,
            score: 9.3,
            question: "hotel_location",
            score_comparison_to_ufi_average: 0,
            localized_question: "Location",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Staff",
            count: 212,
            score: 8.3,
            question: "hotel_staff",
          },
          {
            localized_question: "Total",
            score_comparison_to_ufi_average: 0,
            question: "total",
            count: 213,
            score: 7.7,
          },
          {
            score_comparison_to_ufi_average: -1,
            localized_question: "Value for money",
            score: 7.3,
            count: 210,
            question: "hotel_value",
          },
          {
            question: "hotel_wifi",
            count: 50,
            score: 7.1,
            localized_question: "WiFi",
            score_comparison_to_ufi_average: -1,
          },
        ],
        from_year: 2019,
        customer_type: "solo_traveller",
        average_score: "7.8",
      },
      {
        customer_type: "family_with_young_children",
        from_year: 2019,
        average_score: "7.7",
        count: 314,
        question: [
          {
            count: 310,
            score: 7.7,
            question: "hotel_clean",
            score_comparison_to_ufi_average: 0,
            localized_question: "Cleanliness",
          },
          {
            score_comparison_to_ufi_average: -1,
            localized_question: "Comfort",
            score: 7.3,
            count: 309,
            question: "hotel_comfort",
          },
          {
            localized_question: "Facilities",
            score_comparison_to_ufi_average: -1,
            question: "hotel_services",
            score: 7.1,
            count: 310,
          },
          {
            question: "hotel_location",
            count: 310,
            score: 9.3,
            localized_question: "Location",
            score_comparison_to_ufi_average: 0,
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Staff",
            score: 8.2,
            count: 311,
            question: "hotel_staff",
          },
          {
            score_comparison_to_ufi_average: 0,
            localized_question: "Total",
            score: 7.5,
            count: 314,
            question: "total",
          },
          {
            score: 7.3,
            count: 311,
            question: "hotel_value",
            score_comparison_to_ufi_average: -1,
            localized_question: "Value for money",
          },
          {
            question: "hotel_wifi",
            score: 7.3,
            count: 15,
            localized_question: "WiFi",
            score_comparison_to_ufi_average: -1,
          },
        ],
      },
    ],
    score_distribution: [
      {
        score: 1,
        count: 15,
        percent: 1.29,
      },
      {
        score: 2,
        count: 14,
        percent: "1.20",
      },
      {
        count: 23,
        score: 3,
        percent: 1.98,
      },
      {
        score: 4,
        count: 45,
        percent: 3.87,
      },
      {
        percent: 8.42,
        score: 5,
        count: 98,
      },
      {
        percent: 8.76,
        count: 102,
        score: 6,
      },
      {
        percent: 20.19,
        score: 7,
        count: 235,
      },
      {
        count: 294,
        score: 8,
        percent: 25.26,
      },
      {
        score: 9,
        count: 163,
        percent: "14.00",
      },
      {
        percent: 15.03,
        score: 10,
        count: 175,
      },
    ],
    score_percentage: [
      {
        score_start: 9,
        percent: 29,
        score_end: 10.1,
        count: 338,
        score_word: "Superb",
      },
      {
        percent: 45,
        count: 529,
        score_word: "Good",
        score_end: 9,
        score_start: 7,
      },
      {
        count: 200,
        score_end: 7,
        score_word: "Okay",
        percent: 17,
        score_start: 5,
      },
      {
        count: 68,
        score_word: "Poor",
        score_end: 5,
        percent: 6,
        score_start: 3,
      },
      {
        score_start: 1,
        count: 29,
        score_word: "Very poor",
        score_end: 3,
        percent: 2,
      },
    ],
  },
};

async function consultaDeHoteles() {
  const options = {
    method: "post",
    url: "http://localhost:1026/v2/entities",
    params: { currency: "AED", locale: "en-gb" },
    body: obj,
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

consultaDeHoteles();
