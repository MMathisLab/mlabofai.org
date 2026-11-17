/* ==========================================================================
   M-Lab content data — edit this file to update publications and news.
   The homepage, Publications page and News page all read from here.

   Publication fields:
     title   – paper title
     authors – short author string (lab members can be wrapped in <b>…</b>)
     venue   – journal or conference
     year    – number
     url     – link to the paper
     areas   – any of "cv" (computer vision), "ml" (machine learning), "neuro" (neuroscience), "bio" (biomechanics)
     latest  – true to show it in "Latest publications" on the homepage
     pre     – true for work before the lab opened (2017)
     thumb   – optional image path (e.g. "assets/img/papers/cebra.png") shown
               instead of the topic icon; square images look best
     doi / arxiv / pmid – optional identifier for the Altmetric badge. If left
               out, it is worked out from the URL for nature.com, arXiv, eLife,
               doi.org and PubMed links. Cell, ScienceDirect, OpenReview and CVF
               links need a doi: "10.xxxx/…" added to get a badge.

   Titles, dates and full author lists were checked against Crossref,
   OpenAlex/arXiv and the papers themselves (Nov 2026). Lab members
   (current and alumni) are in <b>…</b>; * marks equal contribution.
   ========================================================================== */

window.MLAB = window.MLAB || {};

// Each paper has year + month (month of publication: issue month for journals, conference month for
// proceedings, posting month for preprints). The site sorts newest first by year, then month.
MLAB.publications = [
  // ---- 2026 ----
  { title: "Extracting Governing Equations from Latent Dynamics via Multi-View Contrastive Learning", authors: "<b>Muratore P.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "NeurIPS", year: 2026, month: 12, url: "https://arxiv.org/abs/2606.13260", areas: ["ml", "neuro"], latest: true },
  { thumb: "assets/img/papers/mathis2026-conb.webp", title: "Artificial intelligence is reshaping neuroscience across scales", authors: "<b>Mackenzie Weygandt Mathis</b>", venue: "Current Opinion in Neurobiology", year: 2026, month: 12, url: "https://www.sciencedirect.com/science/article/pii/S0959438826001017", doi: "10.1016/j.conb.2026.103265", areas: ["ml", "neuro"] },
  { title: "Programmable Semantic Interventions: Learning Causal Carriers from Behavioral Programs", authors: "<b>Muratore P.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "arXiv", year: 2026, month: 11, url: "https://arxiv.org/abs/2611.21307", areas: ["ml"], latest: true },
  { thumb: "assets/img/papers/benquet2026-curbio.webp", title: "Visual uncertainty and task demands shape active sensing strategies in mice", authors: "<b>Benquet C.</b>*, <b>Sainsbury T.</b>, <b>Bruneau L.</b>, Lin Y., Cai C., Popova M., Ponder K., Ntanavara L., Froebe R., Tan Z., Fahey P., Franke K., Franco L.M., Jones K., Chen Y., Keller R., Pitkow X., Niell C.M., Tolias A.S., <b>Mackenzie Weygandt Mathis</b>", venue: "Current Biology", year: 2026, month: 7, url: "https://www.cell.com/current-biology/fulltext/S0960-9822(26)00722-0", doi: "10.1016/j.cub.2026.06.011", areas: ["neuro"], latest: true },
  { thumb: "assets/img/papers/angelaki2026-neuron.webp", title: "The Simons Collaboration on Ecological Neuroscience", authors: "Angelaki D.E., Batista A., Fitzgerald T., Kominsky J.F., Lengyel M., Mathis A., <b>Mackenzie Weygandt Mathis</b>, Moss C.F., Niell C.M., Noel J.-P., Pitkow X., Rothkopf C.A., Savin C., Stachenfeld K., Suthana N., Tolias A., Ulanovsky N., Wolpert D.M., Wong A., Zimmermann J.", venue: "Neuron", year: 2026, month: 7, url: "https://www.cell.com/neuron/abstract/S0896-6273(26)00331-4", areas: ["neuro"] },
  { thumb: "assets/img/papers/fmpose3d2026-cvpr.webp", title: "FMPose3D: monocular 3D pose estimation via flow matching", authors: "<b>Wang T.</b>, <b>Yu X.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "CVPR", year: 2026, month: 6, url: "https://arxiv.org/abs/2602.05755", areas: ["cv"], latest: true },
  { thumb: "assets/img/papers/llavaction2026-iclr.webp", title: "LLaVAction: evaluating and training multi-modal large language models for action recognition", authors: "Qi H.*, <b>Ye S.</b>, Mathis A., <b>Mackenzie Weygandt Mathis</b>", venue: "ICLR", year: 2026, month: 4, url: "https://arxiv.org/abs/2503.18712", areas: ["cv", "ml"], latest: true },
  { title: "Closed-loop imitation learning reveals muscle-centric and latent-goal codes in primate sensorimotor cortex", authors: "Marin Vargas A., Perez Rotondo A., Chiappa A.S., <b>Mackenzie Weygandt Mathis</b>, Mathis A.", venue: "bioRxiv", year: 2026, month: 2, url: "https://www.biorxiv.org/content/10.64898/2026.02.01.703133", doi: "10.64898/2026.02.01.703133", areas: ["bio", "neuro"] },
  { thumb: "assets/img/papers/rosenberg2026-curbio.webp", title: "Individual identification of brown bears using pose-aware metric learning", authors: "Rosenberg B., Zhou M., Wolf N., <b>Mackenzie Weygandt Mathis</b>, Harris B.P., Mathis A.", venue: "Current Biology", year: 2026, month: 2, url: "https://www.sciencedirect.com/science/article/pii/S0960982225016707", doi: "10.1016/j.cub.2025.12.022", areas: ["cv"] },
  { thumb: "assets/img/papers/mathis2026-natneuro.webp", title: "Leveraging insights from neuroscience to build adaptive artificial intelligence", authors: "<b>Mackenzie Weygandt Mathis</b>", venue: "Nature Neuroscience", year: 2026, month: 1, url: "https://www.nature.com/articles/s41593-025-02169-w", areas: ["ml", "neuro"], latest: true },
  // ---- 2025 ----
  { thumb: "assets/img/papers/mathis2025-nrn.webp", title: "Joint modelling of brain and behaviour dynamics with artificial intelligence", authors: "<b>Mackenzie Weygandt Mathis</b>, Mathis A.", venue: "Nature Reviews Neuroscience", year: 2025, month: 12, url: "https://www.nature.com/articles/s41583-025-00996-1", areas: ["ml", "neuro"], latest: true },
  { thumb: "assets/img/papers/distil2025-iccv.webp", title: "DISTIL: Data-Free Inversion of Suspicious Trojan Inputs via Latent Diffusion", authors: "<b>Mirzaei H.</b>, Taghavi Z., Rezaee S., Hadi M., Madadi M., <b>Mackenzie Weygandt Mathis</b>", venue: "ICCV", year: 2025, month: 10, arxiv: "2507.22813", url: "https://openaccess.thecvf.com/content/ICCV2025/papers/Mirzaei_DISTIL_Data-Free_Inversion_of_Suspicious_Trojan_Inputs_via_Latent_Diffusion_ICCV_2025_paper.pdf", areas: ["ml", "cv"], latest: true },
  { thumb: "assets/img/papers/gilbert2025-cell.webp", title: "Neuropeptides specify and reprogram division of labor in the leafcutter ant Atta cephalotes", authors: "Gilbert M.B., Glastad K.M., Fioriti M., Sorek M., Scarpa T., Purnell F.S., Xu D., Pino L.K., Korotkov A., Biashad A., Baeza J., Lauman R., <b>Filippova A.</b>, Kacsoh B.Z., Bonasio R., <b>Mackenzie Weygandt Mathis</b>, Garcia B.A., Seluanov A., Gorbunova V., Berger S.L.", venue: "Cell", year: 2025, month: 7, url: "https://www.cell.com/cell/fulltext/S0092-8674(25)00573-2", doi: "10.1016/j.cell.2025.05.023", areas: ["cv", "neuro"] },
  { thumb: "assets/img/papers/schneider2025-aistats.webp", title: "Time-series attribution maps with regularized contrastive learning", authors: "<b>Schneider S.</b>, <b>González Laiz R.</b>, <b>Filippova A.</b>, <b>Frey M.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "AISTATS", year: 2025, month: 5, url: "https://arxiv.org/abs/2502.12977", areas: ["ml"], latest: true },
  { thumb: "assets/img/papers/aros2025-iclr.webp", title: "Adversarially Robust Out-of-Distribution Detection Using Lyapunov-Stabilized Embeddings", authors: "<b>Mirzaei H.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "ICLR", year: 2025, month: 4, url: "https://arxiv.org/abs/2410.10744", areas: ["ml"], latest: true },
  { title: "A Contrastive Teacher-Student Framework for Novelty Detection under Style Shifts", authors: "<b>Mirzaei H.</b>, Nafez M., Madadi M., Maleki A., Hajialilue M., Taghavi Z., Rezaee S., Ansari A., Dibaei Nia B., Shamsaie K., Salehi M., <b>Mackenzie Weygandt Mathis</b>, Soleymani Baghshah M., Sabokrou M., Rohban M.H.", venue: "arXiv", year: 2025, month: 1, url: "https://arxiv.org/abs/2501.17289", areas: ["ml"] },
  // ---- 2024 ----
  { thumb: "assets/img/papers/mathis2024-cell.webp", title: "Decoding the brain: from neural representations to mechanistic models", authors: "<b>Mackenzie Weygandt Mathis</b>, Perez Rotondo A., Chang E.F., Tolias A.S., Mathis A.", venue: "Cell", year: 2024, month: 10, url: "https://www.cell.com/cell/fulltext/S0092-8674(24)00980-2", areas: ["ml", "neuro"], latest: true },
  { title: "Neuro-musculoskeletal modeling reveals muscle-level neural dynamics of adaptive learning in sensorimotor cortex", authors: "<b>DeWolf T.</b>, <b>Schneider S.</b>, Soubiran P., <b>Roggenbach A.</b>, <b>Muratore P.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "bioRxiv", year: 2024, month: 9, url: "https://www.biorxiv.org/content/10.1101/2024.09.11.612513", doi: "10.1101/2024.09.11.612513", areas: ["bio", "neuro"] },
  { thumb: "assets/img/papers/weinreb2024-natmeth.webp", title: "Keypoint-MoSeq: parsing behavior by linking point tracking to pose dynamics", authors: "Weinreb C., Pearl J.E., Lin S., Osman M.A.M., Zhang L., Annapragada S., Conlin E., Hoffmann R., Makowska S., Gillis W.F., Jay M., <b>Ye S.</b>, Mathis A., <b>Mackenzie Weygandt Mathis</b>, Pereira T., Linderman S.W., Datta S.R.", venue: "Nature Methods", year: 2024, month: 7, url: "https://www.nature.com/articles/s41592-024-02318-2", areas: ["cv"] },
  { thumb: "assets/img/papers/monosov2024-conb.webp", title: "Ethological computational psychiatry: Challenges and opportunities", authors: "Monosov I.E.*, Zimmermann J., Frank M.J., <b>Mackenzie Weygandt Mathis</b>, Baker J.T.", venue: "Current Opinion in Neurobiology", year: 2024, month: 6, url: "https://www.sciencedirect.com/science/article/pii/S0959438824000436", areas: ["neuro"] },
  { thumb: "assets/img/papers/superanimal2024-natcomms.webp", title: "SuperAnimal pretrained pose estimation models for behavioral analysis", authors: "<b>Ye S.</b>, <b>Filippova A.</b>, <b>Lauer J.</b>, <b>Schneider S.</b>, <b>Vidal M.</b>, <b>Qiu T.</b>, Mathis A., <b>Mackenzie Weygandt Mathis</b>", venue: "Nature Communications", year: 2024, month: 6, url: "https://www.nature.com/articles/s41467-024-48792-2", areas: ["cv"], latest: true },
  { title: "Molecular and neural mechanisms of behavioural integration in the extended-amygdala", authors: "Chang S., Fermani F., Huang L., <b>Schneider S.</b>, <b>Mackenzie Weygandt Mathis</b>, Deussing J.M., Cai N.", venue: "bioRxiv", year: 2024, month: 4, url: "https://www.biorxiv.org/content/10.1101/2024.04.29.591588", doi: "10.1101/2024.04.29.591588", areas: ["neuro"] },
  // ---- 2023 ----
  { thumb: "assets/img/papers/amadeusgpt2023-neurips.webp", title: "AmadeusGPT: a natural language interface for interactive animal behavioral analysis", authors: "<b>Ye S.</b>, <b>Lauer J.</b>, Zhou M., Mathis A., <b>Mackenzie Weygandt Mathis</b>", venue: "NeurIPS", year: 2023, month: 12, url: "https://openreview.net/pdf?id=9AcG3Tsyoq", areas: ["cv", "ml"] },
  { thumb: "assets/img/papers/zhou2023-iccv.webp", title: "Rethinking pose estimation in crowds: overcoming the detection information bottleneck and ambiguity", authors: "Zhou M.*, Stoffl L., <b>Mackenzie Weygandt Mathis</b>, Mathis A.", venue: "ICCV", year: 2023, month: 10, url: "https://openaccess.thecvf.com/content/ICCV2023/papers/Zhou_Rethinking_Pose_Estimation_in_Crowds_Overcoming_the_Detection_Information_Bottleneck_ICCV_2023_paper.pdf", areas: ["cv"] },
  { thumb: "assets/img/papers/sandbrink2023-elife.webp", title: "Contrasting action and posture coding with hierarchical deep neural network models of proprioception", authors: "<b>Sandbrink K.J.</b>, Mamidanna P., Michaelis C., Bethge M., <b>Mackenzie Weygandt Mathis</b>, Mathis A.", venue: "eLife", year: 2023, month: 5, url: "https://elifesciences.org/articles/81499", areas: ["ml", "neuro", "bio"] },
  { thumb: "assets/img/papers/cebra2023-nature.webp", title: "Learnable latent embeddings for joint behavioural and neural analysis", authors: "<b>Schneider S.</b>, <b>Lee J.H.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "Nature", year: 2023, month: 5, url: "https://www.nature.com/articles/s41586-023-06031-6", areas: ["ml", "neuro"] },
  { title: "Brain dynamics uncovered using a machine-learning algorithm", authors: "Research Briefing", venue: "Nature", year: 2023, month: 5, url: "https://doi.org/10.1038/d41586-023-01339-9", areas: ["ml", "neuro"] },
  { thumb: "assets/img/papers/frey2023-curbio.webp", title: "NeuroAI: If grid cells are the answer, is path integration the question?", authors: "<b>Frey M.</b>, <b>Mackenzie Weygandt Mathis</b>, Mathis A.", venue: "Current Biology", year: 2023, month: 3, url: "https://www.sciencedirect.com/science/article/pii/S0960982223000659", doi: "10.1016/j.cub.2023.01.031", areas: ["ml", "neuro"] },
  { title: "Reaching an understanding of cortico-medullary control of forelimb behaviors", authors: "<b>Sainsbury T.T.J.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "Cell", year: 2023, month: 1, url: "https://www.sciencedirect.com/science/article/pii/S0092867422015240", doi: "10.1016/j.cell.2022.12.011", areas: ["neuro"] },
  { thumb: "assets/img/papers/mathis2023-nrn.webp", title: "The neocortical column as a universal template for perception and world-model learning", authors: "<b>Mackenzie Weygandt Mathis</b>", venue: "Nature Reviews Neuroscience", year: 2023, month: 1, url: "https://www.nature.com/articles/s41583-022-00658-6", areas: ["neuro"] },
  // ---- 2022 ----
  { thumb: "assets/img/papers/koch2022-neuron.webp", title: "Next-generation brain observatories", authors: "Koch C., Svoboda K., Bernard A., Basso M.A., Churchland A.K., Fairhall A.L., Groblewski P.A., Lecoq J.A., Mainen Z.F., <b>Mackenzie Weygandt Mathis</b>, Olsen S.R., Phillips J.W., Pouget A., Saxena S., Siegle J.H., Zador A.M.", venue: "Neuron", year: 2022, month: 11, url: "https://www.sciencedirect.com/science/article/pii/S0896627322008996", areas: ["neuro"] },
  { thumb: "assets/img/papers/akiti2022-neuron.webp", title: "Striatal dopamine explains novelty-induced behavioral dynamics and individual variability in threat prediction", authors: "Akiti K., Tsutsui-Kimura I., Xie Y., Mathis A., Markowitz J.E., Anyoha R., Datta S.R., <b>Mackenzie Weygandt Mathis</b>, Uchida N., Watabe-Uchida M.", venue: "Neuron", year: 2022, month: 11, url: "https://www.sciencedirect.com/science/article/pii/S0896627322007589", areas: ["cv", "neuro"] },
  { thumb: "assets/img/papers/maDLC2022-natmeth.webp", title: "Multi-animal pose estimation, identification and tracking with DeepLabCut", authors: "<b>Lauer J.</b>, Zhou M., <b>Ye S.</b>, Menegas W., <b>Schneider S.</b>, <b>Nath T.</b>, Rahman M.M., Di Santo V., <b>Soberanes D.</b>, Feng G., Murthy V.N., Lauder G., Dulac C., <b>Mackenzie Weygandt Mathis</b>, Mathis A.", venue: "Nature Methods", year: 2022, month: 4, url: "https://www.nature.com/articles/s41592-022-01443-0", areas: ["cv"] },
  { thumb: "assets/img/papers/tuia2022-natcomms.webp", title: "Perspectives in machine learning for wildlife conservation", authors: "Tuia D., Kellenberger B., Beery S., Costelloe B.R., Zuffi S., Risse B., Mathis A., <b>Mackenzie Weygandt Mathis</b>, van Langevelde F., Burghardt T., Kays R., Klinck H., Wikelski M., Couzin I.D., van Horn G., Crofoot M.C., Stewart C.V., Berger-Wolf T.", venue: "Nature Communications", year: 2022, month: 2, url: "https://www.nature.com/articles/s41467-022-27980-y", areas: ["cv", "ml"] },
  // ---- 2021 ----
  { thumb: "assets/img/papers/hausmann2021-conb.webp", title: "Measuring and modeling the motor system with machine learning", authors: "<b>Hausmann S.B.</b>, Marin Vargas A., Mathis A., <b>Mackenzie Weygandt Mathis</b>", venue: "Current Opinion in Neurobiology", year: 2021, month: 10, url: "https://www.sciencedirect.com/science/article/pii/S0959438821000519", areas: ["ml", "neuro", "bio"] },
  { thumb: "assets/img/papers/acinoset2021-icra.webp", title: "AcinoSet: A 3D Pose Estimation Dataset and Baseline Models for Cheetahs in the Wild", authors: "Joska D., Clark L., Muramatsu N., Jericevich R., Nicolls F., Mathis A., <b>Mackenzie Weygandt Mathis</b>, Patel A.", venue: "ICRA", year: 2021, month: 5, url: "https://ieeexplore.ieee.org/document/9561338", arxiv: "2103.13282", areas: ["cv", "bio"] },
  { thumb: "assets/img/papers/mann2021-iclrw.webp", title: "Out-of-distribution generalization of internal models is correlated with reward", authors: "Mann K.S., <b>Schneider S.</b>, Chiappa A., <b>Lee J.H.</b>, Bethge M., Mathis A., <b>Mackenzie Weygandt Mathis</b>", venue: "ICLR Workshop", year: 2021, month: 5, url: "https://openreview.net/pdf?id=hR_TNbCr_nQ", areas: ["ml"] },
  { thumb: "assets/img/papers/mathis2021-curbio.webp", title: "Motor control: Neural correlates of optimal feedback control theory", authors: "<b>Mackenzie Weygandt Mathis</b>, <b>Schneider S.</b>", venue: "Current Biology", year: 2021, month: 4, url: "https://www.sciencedirect.com/science/article/pii/S0960982221001524", doi: "10.1016/j.cub.2021.01.087", areas: ["neuro"] },
  { thumb: "assets/img/papers/mouilleau2021-dev.webp", title: "Dynamic extrinsic pacing of the HOX clock in human axial progenitors controls motor neuron subtype specification", authors: "Mouilleau V., Vaslin C., Robert R., Gribaudo S., Nicolas N., Jarrige M., Terray A., Lesueur L., <b>Mackenzie Weygandt Mathis</b>, Croft G., Daynac M., Rouiller-Fabre V., Wichterle H., Ribes V., Martinat C., Nedelec S.", venue: "Development", year: 2021, month: 3, url: "https://dev.biologists.org/content/148/6/dev194514.abstract", areas: ["neuro"] },
  { thumb: "assets/img/papers/mathis2021-wacv.webp", title: "Pretraining boosts out-of-domain robustness for pose estimation", authors: "Mathis A., <b>Biasi T.</b>, <b>Schneider S.</b>, <b>Yüksekgönül M.</b>, Rogers B., Bethge M., <b>Mackenzie Weygandt Mathis</b>", venue: "WACV", year: 2021, month: 1, url: "https://arxiv.org/abs/1909.11229", areas: ["cv", "ml"] },
  // ---- 2020 ----
  { thumb: "assets/img/papers/kane2020-elife.webp", title: "Real-time, low-latency closed-loop feedback using markerless posture tracking", authors: "<b>Kane G.A.</b>, Lopes G., Saunders J.L., Mathis A., <b>Mackenzie Weygandt Mathis</b>", venue: "eLife", year: 2020, month: 12, url: "https://elifesciences.org/articles/61909", areas: ["cv"] },
  { thumb: "assets/img/papers/schneider2020-neuripsw.webp", title: "Generalized Invariant Risk Minimization: relating adaptation and invariant representation learning", authors: "<b>Schneider S.</b>, Krishna S., Eck L., Brendel W., <b>Mackenzie Weygandt Mathis</b>, Bethge M.", venue: "NeurIPS Workshop", year: 2020, month: 12, url: "https://preregister.science/papers_20neurips/57_paper.pdf", areas: ["ml"] },
  { thumb: "assets/img/papers/mathis2020-neuron.webp", title: "A Primer on Motion Capture with Deep Learning: Principles, Pitfalls, and Perspectives", authors: "Mathis A., <b>Schneider S.</b>, <b>Lauer J.</b>, <b>Mackenzie Weygandt Mathis</b>", venue: "Neuron", year: 2020, month: 10, url: "https://www.cell.com/neuron/fulltext/S0896-6273(20)30717-0", areas: ["cv"] },
  { title: "Deep learning tools for the measurement of animal behavior in neuroscience", authors: "<b>Mackenzie Weygandt Mathis</b>, Mathis A.", venue: "Current Opinion in Neurobiology", year: 2020, month: 2, url: "https://www.sciencedirect.com/science/article/pii/S0959438819301151", areas: ["cv", "neuro"] },
  // ---- 2019 ----
  { thumb: "assets/img/papers/mathis2019-natneuro.webp", title: "A new spin on fidgets", authors: "<b>Mackenzie Weygandt Mathis</b>", venue: "Nature Neuroscience", year: 2019, month: 9, url: "https://www.nature.com/articles/s41593-019-0504-2", areas: ["neuro"] },
  { thumb: "assets/img/papers/nath2019-natprot.webp", title: "Using DeepLabCut for 3D markerless pose estimation across species and behaviors", authors: "<b>Nath T.</b>, Mathis A., Chen A.C., Patel A., Bethge M., <b>Mackenzie Weygandt Mathis</b>", venue: "Nature Protocols", year: 2019, month: 6, url: "https://www.nature.com/articles/s41596-019-0176-0", areas: ["cv"] },
  // ---- 2018 ----
  { thumb: "assets/img/papers/dlc2018-natneuro.webp", title: "DeepLabCut: markerless pose estimation of user-defined body parts with deep learning", authors: "Mathis A., Mamidanna P., Cury K.M., Abe T., Murthy V.N., <b>Mackenzie Weygandt Mathis</b>, Bethge M.", venue: "Nature Neuroscience", year: 2018, month: 8, url: "https://www.nature.com/articles/s41593-018-0209-y", areas: ["cv"] },
  // ---- 2017 ----
  { thumb: "assets/img/papers/mathis2017-neuron.webp", title: "Somatosensory cortex plays an essential role in forelimb motor adaptation in mice", authors: "<b>Mackenzie Weygandt Mathis</b>, Mathis A., Uchida N.", venue: "Neuron", year: 2017, month: 3, url: "https://www.cell.com/neuron/fulltext/S0896-6273%2817%2930157-5", areas: ["neuro"] },
  // ---- 2016 ----
  { title: "ALS disrupts spinal motor neuron maturation and aging pathways within gene co-expression networks", authors: "Ho R., Sances S., Gowing G., <b>Amoroso M.W.</b>, O'Rourke J.G., Sahabian A., Wichterle H., Baloh R.H., Sareen D., Svendsen C.N.", venue: "Nature Neuroscience", year: 2016, month: 7, url: "https://www.nature.com/articles/nn.4345", areas: ["neuro"], pre: true },
  { title: "Protein prenylation constitutes an endogenous brake on axonal growth", authors: "Li H., Kuwajima T., Oakley D., Nikulina E., Hou J., Yang W.S., Lowry E.R., Lamas N.J., <b>Amoroso M.W.</b>, Croft G.F., Hosur R., Wichterle H., Sebti S., Filbin M.T., Stockwell B., Henderson C.E.", venue: "Cell Reports", year: 2016, month: 7, url: "https://www.sciencedirect.com/science/article/pii/S2211124716307379", areas: ["neuro"], pre: true },
  // ---- 2015 ----
  { title: "Serotonergic neurons signal reward and punishment on multiple timescales", authors: "Cohen J.Y., <b>Amoroso M.W.</b>, Uchida N.", venue: "eLife", year: 2015, month: 2, url: "https://doi.org/10.7554/eLife.06346", areas: ["neuro"], pre: true },
  // ---- 2014 ----
  { title: "Necroptosis drives motor neuron death in models of both sporadic and familial ALS", authors: "Re D.B., Le Verche V., Yu C., <b>Amoroso M.W.</b>, Politi K.A., Phani S., Ikiz B., Hoffmann L., Koolen M., Nagata T., Papadimitriou D., Nagy P., Mitsumoto H., Kariya S., Wichterle H., Henderson C.E., Przedborski S.", venue: "Neuron", year: 2014, month: 3, url: "https://www.ncbi.nlm.nih.gov/pubmed/24508385", areas: ["neuro"], pre: true },
  // ---- 2013 ----
  { title: "Accelerated high-yield generation of limb-innervating motor neurons from human stem cells", authors: "<b>Amoroso M.W.</b>, Croft G.F., Williams D.J., O'Keeffe S., Carrasco M.A., Davis A.R., Roybon L., Oakley D.H., Maniatis T., Henderson C.E., Wichterle H.", venue: "Journal of Neuroscience", year: 2013, month: 1, url: "https://www.ncbi.nlm.nih.gov/pubmed/23303937", areas: ["neuro"], pre: true },
  // ---- 2012 ----
  { title: "Maturation of spinal motor neurons derived from human embryonic stem cells", authors: "Takazawa T., Croft G.F., <b>Amoroso M.W.</b>, Studer L., Wichterle H., MacDermott A.B.", venue: "PLOS ONE", year: 2012, month: 7, url: "http://scholar.harvard.edu/mwamoroso/publications/maturation-spinal-motor-neurons-derived-human-embryonic-stem-cells", areas: ["neuro"], pre: true },
  { title: "Concentration-dependent requirement for local protein synthesis in motor neuron subtype-specific response to axon guidance cues", authors: "Nédelec S., Peljto M., Shi P., <b>Amoroso M.W.</b>, Kam L.C., Wichterle H.", venue: "Journal of Neuroscience", year: 2012, month: 1, url: "https://www.ncbi.nlm.nih.gov/pubmed/22279234", doi: "10.1523/JNEUROSCI.4176-11.2012", areas: ["neuro"], pre: true },
  // ---- 2011 ----
  { title: "A functionally characterized test set of human induced pluripotent stem cells", authors: "Boulting G.L., Kiskinis E., Croft G.F., <b>Amoroso M.W.</b>, Oakley D.H., Wainger B.J., Williams D.J., Kahler D.J., Yamaki M., Davidow L., Rodolfa C.T., Dimos J.T., Mikkilineni S., MacDermott A.B., Woolf C.J., Henderson C.E., Wichterle H., Eggan K.", venue: "Nature Biotechnology", year: 2011, month: 2, url: "https://www.ncbi.nlm.nih.gov/pubmed/21293464", areas: ["neuro"], pre: true },
  { title: "Reference maps of human ES and iPS cell variation enable high-throughput characterization of pluripotent cell lines", authors: "Bock C., Kiskinis E., Verstappen G., Gu H., Boulting G., Smith Z.D., Ziller M., Croft G.F., <b>Amoroso M.W.</b>, Oakley D.H., Gnirke A., Eggan K., Meissner A.", venue: "Cell", year: 2011, month: 2, url: "http://scholar.harvard.edu/mwamoroso/publications/reference-maps-human-es-and-ips-cell-variation-enable-high-throughput", areas: ["neuro"], pre: true }
];

/* News: newest period first. type = "paper" | "award" | "grant" | "people"
   images (optional): photos shown under that period */
MLAB.news = [
  { period: "Fall 2026", items: [
    { type: "paper", text: "New preprint: PSI (Programmable Semantic Interventions) finds the subspace of a frozen language model's activations that carries a named variable, without labels (Paolo Muratore, Mackenzie Weygandt Mathis)." }
  ]},
  { period: "Winter / Spring 2026", items: [
    { type: "paper", text: "FMPose3D, our state-of-the-art monocular 3D pose estimation method, is published at CVPR 2026 (Ti Wang, Xiaohang Yu, Mackenzie Weygandt Mathis)." },
    { type: "paper", text: "LLaVAction, the lab's first multimodal LLM for action understanding, is published at ICLR 2026." },
    { type: "paper", text: "Mackenzie Weygandt Mathis's piece on leveraging neuroscience for more adaptive AI is published in Nature Neuroscience." },
    { type: "paper", text: "Our review on jointly modeling neural and behavioral data is published in Nature Reviews Neuroscience." },
    { type: "people", text: "The software team grows: Jaap, Cyril and Leonardo join to support the SCENE collaboration and DeepLabCut." }
  ]},
  { period: "Summer / Fall 2025", images: ["assets/img/news/news-247b158b61.webp", "assets/img/news/news-be936da0a8.webp", "assets/img/news/news-f7f848cda2.webp"], items: [
    { type: "award", text: "Mackenzie Weygandt Mathis receives the 2025 SGV Award for non-invasive animal tracking with DeepLabCut." },
    { type: "people", text: "Ti Wang and Xiaohang Yu pass their candidacy exams; Ananda Wolz and Sander Meisen complete their master's theses." },
    { type: "paper", text: "DISTIL is accepted to ICCV 2025 (Hossein Mirzaei, with interns Zeinab Taghavi, Sepehr Rezaee, Masoud Hadi and Moein Madadi)." },
    { type: "people", text: "Hossein Mirzaei passes his candidacy exam." },
    { type: "award", text: "Célia Benquet is accepted to the EPFL PhD Excellence Program." },
    { type: "paper", text: "A collaborative study analyzing ant behavior is published in Cell (Anastasiia, Mackenzie Weygandt Mathis)." },
    { type: "people", text: "Shaokai Ye earns his PhD (AmadeusGPT, SuperAnimal, LLaVAction) and moves to Apple." },
    { type: "people", text: "Ruth Gutjahr and Artur Schneider join as postdocs." },
    { type: "paper", text: "Our preprint on sensorimotor neural dynamics and mouse arm biomechanics is updated on bioRxiv (postdoc Paolo Muratore)." }
  ]},
  { period: "Winter / Spring 2025", images: ["assets/img/news/news-b247909f3c.webp", "assets/img/news/news-a4443e27ec.webp", "assets/img/news/news-99ead6b026.webp", "assets/img/news/news-d3ceed45e9.webp"], items: [
    { type: "paper", text: "AROS is accepted to ICLR 2025 (Hossein Mirzaei, Mackenzie Weygandt Mathis)." },
    { type: "paper", text: "COBRA is accepted to ICLR 2025 (Hossein Mirzaei)." },
    { type: "paper", text: "Time-series attribution maps are accepted to AISTATS 2025 (Steffen, Rodrigo, Anastasiia, Markus, Mackenzie Weygandt Mathis)." },
    { type: "grant", text: "The lab receives an SNSF Starting Grant (CHF 1.5M) to study the neural dynamics of visuomotor learning." },
    { type: "people", text: "Sebastien Hausmann earns his PhD." },
    { type: "paper", text: "Hossein Mirzaei's contrastive teacher–student framework for novelty detection is preprinted." },
    { type: "people", text: "Paolo Muratore joins as a postdoc." },
    { type: "award", text: "CEBRA receives the Swiss Society for Neuroscience best paper award (accepted by Dr. Steffen Schneider)." },
    { type: "award", text: "Mackenzie Weygandt Mathis is co-awarded the Robert Bing Prize from the Swiss Academy of Medical Sciences, with Alexander Mathis and Susanne Wegener." }
  ]},
  { period: "Summer / Fall 2024", items: [
    { type: "award", text: "Mackenzie Weygandt Mathis is awarded the Swiss Science Prize Latsis 2024." },
    { type: "people", text: "Hossein Mirzaei, Ti Wang and Xiaohang Yu join as PhD students." },
    { type: "grant", text: "The Kavli Foundation supports DeepLabCut and AmadeusGPT through the CZI EOSS Program." },
    { type: "grant", text: "Alexander Mathis and Mackenzie Weygandt Mathis are awarded an SNSF Project Grant (CHF 1.2M)." },
    { type: "paper", text: "CellSeg3D is preprinted and reviewed at eLife (Cyril)." },
    { type: "award", text: "Mackenzie Weygandt Mathis and Alexander Mathis give the FENS 2024 Kandel Prize Lecture in Vienna." }
  ]},
  { period: "Winter / Spring 2024", images: ["assets/img/news/news-53d2fb9457.webp", "assets/img/news/news-0686d97fab.webp", "assets/img/news/news-bb05721350.webp", "assets/img/news/news-4efb3c09d5.webp", "assets/img/news/news-491b5a6b6e.webp"], items: [
    { type: "paper", text: "SuperAnimal is accepted in Nature Communications (Shaokai Ye), with a companion paper in Nature Methods." },
    { type: "people", text: "Célia Benquet becomes a PhD candidate." },
    { type: "award", text: "DeepLabCut receives the Frontiers of Science Award 2023." }
  ]},
  { period: "Summer / Fall 2023", items: [
    { type: "paper", text: "AmadeusGPT is accepted to NeurIPS 2023 (Shaokai Ye, Jessy Lauer, Mackenzie Weygandt Mathis)." },
    { type: "award", text: "Mackenzie Weygandt Mathis is awarded the 2023/24 Eric Kandel Young Neuroscientists Prize, with Alexander Mathis." },
    { type: "award", text: "The original DeepLabCut paper receives the Frontiers of Science Award 2023." },
    { type: "people", text: "Steffen Schneider will start his own research group at Helmholtz AI in spring 2024." },
    { type: "paper", text: "Our work on pose estimation in crowded scenes is accepted to ICCV 2023." },
    { type: "paper", text: "Our study of proprioception with hierarchical models is published in eLife (co-first authors Kai and Pranav)." },
    { type: "people", text: "Célia Benquet joins as a PhD student." }
  ]},
  { period: "Winter / Spring 2023", items: [
    { type: "paper", text: "CEBRA is published in Nature (Steffen Schneider, Jin Lee), with coverage in more than 40 news outlets." },
    { type: "paper", text: "SuperAnimal models are released in DeepLabCut, with an arXiv paper led by Shaokai Ye." },
    { type: "paper", text: "A review in Cell (Thomas Sainsbury) and a Dispatch in Current Biology (Markus Frey) are published." },
    { type: "people", text: "The CEBRA dev team runs its first workshops." }
  ]},
  { period: "Summer / Fall 2022", items: [
    { type: "award", text: "Mackenzie Weygandt Mathis is named a Vallee Foundation Scholar." },
    { type: "paper", text: "Multi-animal DeepLabCut (Jessy Lauer) is featured in Nature." }
  ]},
  { period: "Winter / Spring 2022", items: [
    { type: "grant", text: "Radala Foundation funding supports ALS research with the Schneider and Courtine labs." },
    { type: "paper", text: "Our call to action on machine learning for wildlife conservation is published in Nature Communications." },
    { type: "grant", text: "CZI funds a napari plugin system for DeepLabCut." },
    { type: "paper", text: "Multi-animal DeepLabCut is published in Nature Methods (Jessy Lauer)." }
  ]},
  { period: "Summer / Fall 2021", items: [
    { type: "award", text: "Steffen Schneider is awarded a 2021 Google PhD Fellowship." },
    { type: "people", text: "Shaokai Ye becomes a PhD candidate." },
    { type: "paper", text: "Two papers are accepted to the CVPR CV4Animals workshop, a new multi-animal DeepLabCut preprint is posted, and Mackenzie Weygandt Mathis gives a keynote." },
    { type: "grant", text: "A Novartis grant supports the EPFL MausHaus." },
    { type: "people", text: "Sebastien Hausmann passes his candidacy exam." },
    { type: "award", text: "Mackenzie Weygandt Mathis is awarded the FENS EJN 2022 Young Investigator Prize." }
  ]},
  { period: "Winter / Spring 2021", items: [
    { type: "paper", text: "A paper is accepted to the ICML SSL-RL Workshop (Steffen Schneider, Jin Lee)." },
    { type: "paper", text: "A Current Biology Dispatch on motor control is published (Steffen Schneider)." },
    { type: "grant", text: "An SNSF grant supports our work on forelimb motor adaptation." },
    { type: "paper", text: "Thomas Biasi's first-author WACV 2021 paper, with a benchmark by Steffen Schneider; Thomas interns at Amazon." },
    { type: "people", text: "Mert Yüksekgönül is accepted to several top CS programs and heads to Stanford for his PhD." },
    { type: "people", text: "Valentin Bruttin graduates from EPFL with top marks." },
    { type: "paper", text: "3D cheetah modeling with Amir Patel's group is accepted to ICRA 2021." }
  ]},
  { period: "Fall / Winter 2020", items: [
    { type: "paper", text: "Our real-time, low-latency behavior tracking paper is published in eLife (alumnus Gary Kane)." },
    { type: "paper", text: "A Primer on Motion Capture with Deep Learning is published in Neuron." },
    { type: "paper", text: "Steffen Schneider's work is accepted to a NeurIPS 2020 workshop." }
  ]},
  { period: "Summer 2020", items: [
    { type: "people", text: "The lab moves to EPFL (Campus Biotech, Geneva) with support from the Bertarelli Foundation; Mackenzie Weygandt Mathis is appointed Bertarelli Foundation Chair of Integrative Neuroscience." },
    { type: "paper", text: "Our work on robustness in animal pose estimation is accepted to the ICML 2020 UDL Workshop." },
    { type: "people", text: "Daniel Soberanes graduates from Harvard College." },
    { type: "people", text: "Kai Sandbrink graduates from ETH Zurich and posts his first-author preprint on bioRxiv." },
    { type: "award", text: "Thomas Biasi is awarded the Herschel-Smith Fellowship." }
  ]},
  { period: "Winter / Spring 2020", items: [
    { type: "people", text: "We host the second DeepLabCut workshop and our first hackathon, and attend the CZI EOSS meeting." }
  ]},
  { period: "Summer / Fall 2019", items: [
    { type: "grant", text: "CZI awards a grant to support DeepLabCut." },
    { type: "paper", text: "Nature covers two of our articles: DeepLabCut, and two-photon imaging during motor adaptation." },
    { type: "paper", text: "Bloomberg Businessweek covers the lab's work." },
    { type: "paper", text: "DeepLabCut 2.0 is published in Nature Protocols, with the team featured on the cover." }
  ]},
  { period: "Fall / Winter 2018", items: [
    { type: "people", text: "The first DeepLabCut workshop takes place in January 2019." },
    { type: "paper", text: "November: DeepLabCut extensions are accepted to Cosyne 2019, and an NCM 2019 talk is accepted." },
    { type: "people", text: "September: Adrian receives his master's degree." },
    { type: "paper", text: "August: DeepLabCut is published in Nature Neuroscience." },
    { type: "paper", text: "The NVIDIA Developer Blog highlights DeepLabCut." },
    { type: "paper", text: "July: The Atlantic covers the DeepLabCut preprint." },
    { type: "paper", text: "June: The lab's first paper is accepted." },
    { type: "paper", text: "April: The lab's first preprint (with Matthias Bethge) is posted on arXiv." },
    { type: "people", text: "February: Melony Tong completes her senior thesis." }
  ]},
  { period: "Fall 2017", images: ["assets/img/news/news-532d3550a8.webp", "assets/img/news/news-7c49f01955.webp", "assets/img/news/news-2222fefa84.webp"], items: [
    { type: "grant", text: "NVIDIA awards the lab a GPU grant." },
    { type: "people", text: "September 1: The lab opens at Harvard." }
  ]}
];

// DeepLabCut page: key papers, matched by title against M.publications (extras fill gaps)
MLAB.dlcPapers = {
  primary: [
    "DeepLabCut: markerless pose estimation of user-defined body parts with deep learning",
    "Using DeepLabCut for 3D markerless pose estimation across species and behaviors",
    "Real-time, low-latency closed-loop feedback using markerless posture tracking",
    "Multi-animal pose estimation, identification and tracking with DeepLabCut",
    "SuperAnimal pretrained pose estimation models for behavioral analysis",
    "Rethinking pose estimation in crowds: overcoming the detection information bottleneck and ambiguity",
    "FMPose3D: monocular 3D pose estimation via flow matching"
  ],
  more: [
    "A Primer on Motion Capture with Deep Learning: Principles, Pitfalls, and Perspectives",
    "Deep learning tools for the measurement of animal behavior in neuroscience",
    "Pretraining boosts out-of-domain robustness for pose estimation",
    "On the inference speed and video-compression robustness of DeepLabCut"
  ],
  extras: [
    { title: "On the inference speed and video-compression robustness of DeepLabCut", authors: "Mathis A., Warren R.", venue: "bioRxiv", year: 2018, url: "https://www.biorxiv.org/content/10.1101/457242v1", doi: "10.1101/457242", areas: ["cv"] }
  ]
};
