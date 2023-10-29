"use client"

import React, { useState } from 'react';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    natureEtablissement: '',
    denominationEtablissement: '',
    typeEFR: '',
    denominationEFR: '',
    intituleFormation: '',
    domaineFormation: '',
    mentionFormation: '',
    specialiteFormation: '',
    gradeFormation: '',
    diplomeFormation: '',
    responsableFormation: '',
    gradeResponsable: '',
    specialiteResponsable: '',
    dateEvaluation: '',
    etatValidation: '',
    objectifsFormules: '',
    traductionObjectifs: '',
    infrastructuresExistantes: '',
    enseignantsExperts: '',
    personnelAppui: '',
    equipementsFacilitentApprentissage: '',
    laboratoiresExistants: '',
    outilsTechnologiques: '',
    bibliothequeDediee: '',
    offreMiseAJour: '',
    dateDerniereMiseAJour: '',
    mesuresMobilite: '',
    mecanismeSuiviEvaluation: '',
    auMoinsUneEvaluation: '',
    leconsTireesEvaluation: '',
    emploiGaranti: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Soumission

      console.log('Form submitted:', formData);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.natureEtablissement) {
      errors.natureEtablissement = 'Ce champ est requis';
    }

    if (!data.denominationEtablissement) {
      errors.denominationEtablissement = 'Ce champ est requis';
    }

    if (!data.typeEFR) {
      errors.typeEFR = 'Ce champ est requis';
    }

    if (!data.emploiGaranti) {
      errors.emploiGaranti = 'Ce champ est requis';
    }

    if (!data.intituleFormation) {
      errors.intituleFormation = 'Ce champ est requis';
    }
  
    if (!data.domaineFormation) {
      errors.domaineFormation = 'Ce champ est requis';
    }
  
    if (!data.mentionFormation) {
      errors.mentionFormation = 'Ce champ est requis';
    }
  
    if (!data.specialiteFormation) {
      errors.specialiteFormation = 'Ce champ est requis';
    }
  
    if (!data.gradeFormation) {
      errors.gradeFormation = 'Ce champ est requis';
    }
  
    if (!data.diplomeFormation) {
      errors.diplomeFormation = 'Ce champ est requis';
    }
  
    if (!data.responsableFormation) {
      errors.responsableFormation = 'Ce champ est requis';
    }
  
    if (!data.gradeResponsableFormation) {
      errors.gradeResponsableFormation = 'Ce champ est requis';
    }
  
    if (!data.specialiteResponsableFormation) {
      errors.specialiteResponsableFormation = 'Ce champ est requis';
    }
  
    if (!data.dateEvaluationOffreFormation) {
      errors.dateEvaluationOffreFormation = 'Ce champ est requis';
    }
    
    if (!data.ressourcesFaciliterApprentissage) {
      errors.ressourcesFaciliterApprentissage = 'Ce champ est requis';
  }

    if (!data.offreFormationMiseAJour) {
      errors.offreFormationMiseAJour = 'Ce champ est requis';
  }

    if (!data.offreFormationMesuresMobilite) {
      errors.offreFormationMesuresMobilite = 'Ce champ est requis';
  }

    if (!data.suiviEvaluationMecanisme) {
      errors.suiviEvaluationMecanisme = 'Ce champ est requis';
  }

    if (!data.formationEmployabilite) {
      errors.formationEmployabilite = 'Ce champ est requis';
  }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 class="form-title">FORMULAIRES DE CONTRÔLE DE LA QUALITÉ DES ENSEIGNEMENTS</h1>

      {/* A. Informations générales */}
      <div>
        <label>01. Nature de l’établissement de rattachement:</label>
        <select name="natureEtablissement" value={formData.natureEtablissement} onChange={handleChange}>
          <option value="">Sélectionner</option>
          <option value="UNB">UNB</option>
          <option value="EPES">EPES</option>
        </select>
        {formErrors.natureEtablissement && <span style={{ color: 'red' }}>{formErrors.natureEtablissement}</span>}
      </div>

      <div>
        <label>02. Dénomination de l’établissement de rattachement:</label>
        <input type="text" name="denominationEtablissement" value={formData.denominationEtablissement} onChange={handleChange} />
        {formErrors.denominationEtablissement && <span style={{ color: 'red' }}>{formErrors.denominationEtablissement}</span>}
      </div>

      <div>
        <label>03. Type d’EFR:</label>
        <select name="typeEFR" value={formData.typeEFR} onChange={handleChange}>
          <option value="">Sélectionner</option>
          <option value="Faculté">Faculté</option>
          <option value="Ecole">Ecole</option>
          <option value="Chaire">Chaire</option>
          <option value="Institut">Institut</option>
          <option value="Autres">Autres à préciser</option>
        </select>
        {formErrors.typeEFR && <span style={{ color: 'red' }}>{formErrors.typeEFR}</span>}
      </div>
      <div>
        <label>04. Dénomination de l’EFR:</label>
        <input type="text" name="denominationEFR" value={formData.denominationEFR} onChange={handleChange} />
        {formErrors.denominationEFR && <span style={{ color: 'red' }}>{formErrors.denominationEFR}</span>}
      </div>

      <div>
        <label>05. Intitulé de la formation:</label>
        <input type="text" name="intituleFormation" value={formData.intituleFormation} onChange={handleChange} />
        {formErrors.intituleFormation && <span style={{ color: 'red' }}>{formErrors.intituleFormation}</span>}
      </div>

      <div>
        <label>06. Domaine de la formation:</label>
        <input type="text" name="domaineFormation" value={formData.domaineFormation} onChange={handleChange} />
        {formErrors.domaineFormation && <span style={{ color: 'red' }}>{formErrors.domaineFormation}</span>}
      </div>

      {/* B. Critères de contrôle de la qualité de l’offre de formation */}
      <div>
        <label>08. La formation garantit l’employabilité des diplômés:</label>
        <select name="emploiGaranti" value={formData.emploiGaranti} onChange={handleChange}>
          <option value="">Sélectionner</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
        {formErrors.emploiGaranti && <span style={{ color: 'red' }}>{formErrors.emploiGaranti}</span>}
      </div>
      <div>
        <label>07. Mention de la formation:</label>
        <input type="text" name="mentionFormation" value={formData.mentionFormation} onChange={handleChange} />
        {formErrors.mentionFormation && <span style={{ color: 'red' }}>{formErrors.mentionFormation}</span>}
      </div>

      <div>
        <label>08. Spécialité/ filière de la formation:</label>
        <input type="text" name="specialiteFormation" value={formData.specialiteFormation} onChange={handleChange} />
        {formErrors.specialiteFormation && <span style={{ color: 'red' }}>{formErrors.specialiteFormation}</span>}
      </div>

      <div>
        <label>09. Grade de la formation:</label>
        <select name="gradeFormation" value={formData.gradeFormation} onChange={handleChange}>
          <option value="">Sélectionner</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="D">D</option>
        </select>
        {formErrors.gradeFormation && <span style={{ color: 'red' }}>{formErrors.gradeFormation}</span>}
      </div>

      <div>
        <label>10. Diplôme:</label>
        <input type="text" name="diplome" value={formData.diplome} onChange={handleChange} />
        {formErrors.diplome && <span style={{ color: 'red' }}>{formErrors.diplome}</span>}
      </div>

      <div>
        <label>11. Nom et prénoms de(s) Responsable(s) de la formation:</label>
        <input type="text" name="responsablesFormation" value={formData.responsablesFormation} onChange={handleChange} />
        {formErrors.responsablesFormation && <span style={{ color: 'red' }}>{formErrors.responsablesFormation}</span>}
      </div>

      <div>
        <label>12. Grade de(s) Responsable(s) de la formation:</label>
        <input type="text" name="gradeResponsables" value={formData.gradeResponsables} onChange={handleChange} />
        {formErrors.gradeResponsables && <span style={{ color: 'red' }}>{formErrors.gradeResponsables}</span>}
      </div>

      <div>
        <label>13. Spécialité de(s) Responsable(s) de la formation:</label>
        <input type="text" name="specialiteResponsables" value={formData.specialiteResponsables} onChange={handleChange} />
        {formErrors.specialiteResponsables && <span style={{ color: 'red' }}>{formErrors.specialiteResponsables}</span>}
      </div>

      <div>
        <label>14. Date d’évaluation de l’offre de formation:</label>
        <input type="text" name="dateEvaluation" value={formData.dateEvaluation} onChange={handleChange} />
        {formErrors.dateEvaluation && <span style={{ color: 'red' }}>{formErrors.dateEvaluation}</span>}
      </div>

      {/* B. Critères de contrôle de la qualité de l’offre de formation */}

      <div>
        <label>01. Etat de validation de l’offre de formation:</label>
        <div>
          <input
            type="radio"
            name="etatValidation"
            value="Oui"
            checked={formData.etatValidation === "Oui"}
            onChange={handleChange}
          />
          <label>Oui</label>
          <input
            type="radio"
            name="etatValidation"
            value="Non"
            checked={formData.etatValidation === "Non"}
            onChange={handleChange}
          />
          <label>Non</label>
          <input
            type="text"
            name="etatValidationText"
            value={formData.etatValidationText}
            onChange={handleChange}
          />
        </div>
        {formErrors.etatValidation && <span style={{ color: 'red' }}>{formErrors.etatValidation}</span>}
      </div>

      <div>
        <label>02. Formulation des objectifs pédagogiques:</label>
        <div>
          <input
            type="radio"
            name="formulationObjectifs"
            value="Oui"
            checked={formData.formulationObjectifs === "Oui"}
            onChange={handleChange}
          />
          <label>Oui</label>
          <input
            type="radio"
            name="formulationObjectifs"
            value="Non"
            checked={formData.formulationObjectifs === "Non"}
            onChange={handleChange}
          />
          <label>Non</label>
        </div>
        {formErrors.formulationObjectifs && <span style={{ color: 'red' }}>{formErrors.formulationObjectifs}</span>}
      </div>

      <div>
        <label>03. Traduction dans les objectifs de formation des compétences escomptées:</label>
        <div>
          <input
            type="radio"
            name="traductionObjectifs"
            value="Oui"
            checked={formData.traductionObjectifs === "Oui"}
            onChange={handleChange}
          />
          <label>Oui</label>
          <input
            type="radio"
            name="traductionObjectifs"
            value="Non"
            checked={formData.traductionObjectifs === "Non"}
            onChange={handleChange}
          />
          <label>Non</label>
        </div>
        {formErrors.traductionObjectifs && <span style={{ color: 'red' }}>{formErrors.traductionObjectifs}</span>}
      </div>

      <div>
        <label>04. Existence de ressources adéquates pour faciliter l'apprentissage:</label>
        <div>
          <label>Les infrastructures existent et sont adaptées:</label>
          <select name="infrastructuresAdaptees" value={formData.infrastructuresAdaptees} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
          {formErrors.infrastructuresAdaptees && <span style={{ color: 'red' }}>{formErrors.infrastructuresAdaptees}</span>}
          {/* Répétez ces lignes pour chaque affirmation des ressources adéquates */}
        </div>
      </div>


      <div>
        <label>05. L’offre de formation est mise à jour conformément à la périodicité prescrite:</label>
        <div>
          <label>L’offre de formation est mise à jour comme prévu:</label>
          <select name="offreFormationMiseAJour" value={formData.offreFormationMiseAJour} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
          {formErrors.offreFormationMiseAJour && <span style={{ color: 'red' }}>{formErrors.offreFormationMiseAJour}</span>}
        </div>
      </div>

      <div>
        <label>06. L’offre de formation a prévu des mesures favorisant la mobilité des étudiants:</label>
        <div>
          <label>L’offre de formation a prévu des mesures de mobilité des étudiants:</label>
          <select name="offreFormationMesuresMobilite" value={formData.offreFormationMesuresMobilite} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
          {formErrors.offreFormationMesuresMobilite && <span style={{ color: 'red' }}>{formErrors.offreFormationMesuresMobilite}</span>}
        </div>
      </div>


      <div>
        <label>07. Le mécanisme de suivi-évaluation prévu dans l’offre de formation est effectivement mis en œuvre:</label>
        <div>
          <label>Le mécanisme de suivi-évaluation est mis en œuvre comme prévu:</label>
          <select name="suiviEvaluationMecanisme" value={formData.suiviEvaluationMecanisme} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
          {formErrors.suiviEvaluationMecanisme && <span style={{ color: 'red' }}>{formErrors.suiviEvaluationMecanisme}</span>}
        </div>
      </div>


      <div>
        <label>08. La formation garantit l’employabilité des diplômés:</label>
        <div>
          <label>La formation garantit l’emploi:</label>
          <select name="formationEmployabilite" value={formData.formationEmployabilite} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
          {formErrors.formationEmployabilite && <span style={{ color: 'red' }}>{formErrors.formationEmployabilite}</span>}
        </div>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Formulaire;
