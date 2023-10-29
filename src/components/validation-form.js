export default function ValidationForm (data) {
    const errors = {};

    data.forEach((q) => {
      if (q.type === "qcm" || q.type === "champs") {
        if (data[q.question] === '') {
          errors[q.question] = 'Ce champ est requis.';
        }
      }
    });

    return errors;
};



