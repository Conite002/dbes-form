const InitialState = {
    submitting: false,
    completedField: false,
    data: [
      {
        question: "Nature de l’établissement de rattachement",
        type: "qcm",
        values: ["UNB", "EPES"]
      },
      {
        question: "Type d’EFR",
        type: "unique",
        values: ["Faculté", "Ecole", "Chaire", "Institut", "Autres à préciser"]
      },
      {
        question: "Dénomination de l’établissement de rattachement",
        type: "champs",
        values: []
      },
    ],
    errors: {}
};

export default InitialState