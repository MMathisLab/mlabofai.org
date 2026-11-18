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
     altmetric – optional Altmetric record ID (the number in an altmetric.com/details/… link);
               use it when a badge stays blank even with a DOI.
     doi / arxiv / pmid – optional identifier for the Altmetric badge. If left
               out, it is worked out from the URL for nature.com, arXiv, eLife,
               doi.org and PubMed links. Cell, ScienceDirect, OpenReview and CVF
               links need a doi: "10.xxxx/…" added to get a badge.

   Titles, dates and full author lists were checked against Crossref,
   OpenAlex/arXiv and the papers themselves (Nov 2026). Lab members
   (current and alumni) are in <b>…</b>; * marks equal contribution.
   Authors are written as full names (Given Family).
   ========================================================================== */

window.MLAB = window.MLAB || {};

// Each paper has year + month (month of publication: issue month for journals, conference month for
// proceedings, posting month for preprints). The site sorts newest first by year, then month.
MLAB.publications = [
  // ---- 2026 ----
  { thumb: "assets/img/papers/dysco2026-neurips.webp", title: "Extracting Governing Equations from Latent Dynamics via Multi-View Contrastive Learning", authors: "<b>Paolo Muratore</b>†, <b>Mackenzie Weygandt Mathis</b>†", venue: "NeurIPS", year: 2026, month: 12, url: "https://arxiv.org/abs/2606.13260", areas: ["ml", "neuro"], latest: true },
  { thumb: "assets/img/papers/mathis2026-conb.webp", title: "Artificial intelligence is reshaping neuroscience across scales", authors: "<b>Mackenzie Weygandt Mathis</b>†", venue: "Current Opinion in Neurobiology", year: 2026, month: 12, url: "https://www.sciencedirect.com/science/article/pii/S0959438826001017", doi: "10.1016/j.conb.2026.103265", areas: ["cv", "ml", "neuro", "bio"] },
  { thumb: "assets/img/papers/psi2026-arxiv.webp", title: "Programmable Semantic Interventions: Learning Causal Carriers from Behavioral Programs", authors: "<b>Paolo Muratore</b>†, <b>Mackenzie Weygandt Mathis</b>†", venue: "arXiv", year: 2026, month: 11, url: "https://arxiv.org/abs/2611.21307", press: [["Project page", "https://adaptivemotorcontrollab.github.io/psi/"]], areas: ["ml"], latest: true },
  { thumb: "assets/img/papers/benquet2026-curbio.webp", title: "Visual uncertainty and task demands shape active sensing strategies in mice", authors: "<b>Célia Benquet</b>*, <b>Thomas Sainsbury</b>*, <b>Léo Bruneau</b>, Yang Lin, Chenchen Cai, <b>Mariia Popova</b>, Kayla Ponder, Lydia Ntanavara, Rachel Froebe, Zheng Tan, Paul Fahey, Katrin Franke, Luis M. Franco, Keaton Jones, Yizhou Chen, Reece Keller, Xaq Pitkow, Cristopher M. Niell, Andreas S. Tolias, <b>Mackenzie Weygandt Mathis</b>†", venue: "Current Biology", year: 2026, month: 7, url: "https://www.cell.com/current-biology/fulltext/S0960-9822(26)00722-0", doi: "10.1016/j.cub.2026.06.011", press: [["EPFL News", "https://actu.epfl.ch/news/mice-actively-seek-better-views-to-make-visual-d-2/"]], areas: ["neuro"], latest: true },
  { thumb: "assets/img/papers/angelaki2026-neuron.webp", title: "The Simons Collaboration on Ecological Neuroscience: Studying how the brain interacts with the world", authors: "Dora E. Angelaki, Aaron Batista, Tesca Fitzgerald, Jonathan F. Kominsky, Máté Lengyel, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>, Cynthia F. Moss, Cristopher M. Niell, Jean-Paul Noel, Xaq Pitkow, Constantin A. Rothkopf, Cristina Savin, Kimberley Stachenfeld, Nanthia Suthana, Andreas Tolias, Nachum Ulanovsky, Daniel M. Wolpert, Alex Wong, Jan Zimmermann", note: "All authors contributed equally; listed alphabetically.", venue: "Neuron", year: 2026, month: 7, altmetric: "197658582", doi: "10.1016/j.neuron.2026.04.036", url: "https://www.cell.com/neuron/abstract/S0896-6273(26)00331-4", areas: ["neuro"] },
  { thumb: "assets/img/papers/fmpose3d2026-cvpr.webp", title: "FMPose3D: monocular 3D pose estimation via flow matching", authors: "<b>Ti Wang</b>, <b>Xiaohang Yu</b>, <b>Mackenzie Weygandt Mathis</b>†", venue: "CVPR", year: 2026, month: 6, url: "https://arxiv.org/abs/2602.05755", press: [["Project page", "https://xiu-cs.github.io/FMPose3D/"]], areas: ["cv", "bio"], latest: true },
  { thumb: "assets/img/papers/llavaction2026-iclr.webp", title: "LLaVAction: evaluating and training multi-modal large language models for action understanding", authors: "Haozhe Qi*, <b>Shaokai Ye</b>*, Alexander Mathis**, <b>Mackenzie Weygandt Mathis</b>**†", venue: "ICLR", year: 2026, month: 4, url: "https://arxiv.org/abs/2503.18712", press: [["Project page", "https://mmathislab.github.io/llavaction"]], areas: ["cv", "ml"], latest: true },
  { thumb: "assets/img/papers/vargas2026-biorxiv.webp", title: "Closed-loop imitation learning reveals muscle-centric and latent-goal codes in primate sensorimotor cortex", authors: "Alessandro Marin Vargas, Alberto Silvio Chiappa, Adriana Perez Rotondo, <b>Mackenzie Weygandt Mathis</b>, Alexander Mathis", venue: "bioRxiv", year: 2026, month: 2, url: "https://www.biorxiv.org/content/10.64898/2026.02.01.703133", doi: "10.64898/2026.02.01.703133", areas: ["bio", "neuro"] },
  { thumb: "assets/img/papers/rosenberg2026-curbio.webp", title: "Individual identification of brown bears using pose-aware metric learning", authors: "Beth Rosenberg, Mu Zhou, Nathan Wolf, <b>Mackenzie Weygandt Mathis</b>, Bradley P. Harris, Alexander Mathis", venue: "Current Biology", year: 2026, month: 2, url: "https://www.sciencedirect.com/science/article/pii/S0960982225016707", doi: "10.1016/j.cub.2025.12.022", press: [["EPFL News", "https://neuro-x.epfl.ch/en/news/ai-enables-a-whos-who-of-brown-bears-in-alaska/"], ["Popular Science", "https://www.popsci.com/environment/bears-facial-id/"]], areas: ["cv"] },
  { thumb: "assets/img/papers/mathis2026-natneuro.webp", title: "Leveraging insights from neuroscience to build adaptive artificial intelligence", authors: "<b>Mackenzie Weygandt Mathis</b>†", venue: "Nature Neuroscience", year: 2026, month: 1, url: "https://www.nature.com/articles/s41593-025-02169-w", areas: ["ml", "neuro"], latest: true },
  // ---- 2025 ----
  { thumb: "assets/img/papers/mathis2025-nrn.webp", title: "Joint modelling of brain and behaviour dynamics with artificial intelligence", authors: "<b>Mackenzie Weygandt Mathis</b>†, Alexander Mathis", venue: "Nature Reviews Neuroscience", year: 2025, month: 12, url: "https://www.nature.com/articles/s41583-025-00996-1", areas: ["ml", "neuro"], latest: true },
  { thumb: "assets/img/papers/distil2025-iccv.webp", title: "DISTIL: Data-Free Inversion of Suspicious Trojan Inputs via Latent Diffusion", authors: "<b>Hossein Mirzaei</b>, Zeinab Sadat Taghavi, Sepehr Rezaee, Masoud Hadi, Moein Madadi, <b>Mackenzie Weygandt Mathis</b>†", venue: "ICCV", year: 2025, month: 10, arxiv: "2507.22813", url: "https://openaccess.thecvf.com/content/ICCV2025/papers/Mirzaei_DISTIL_Data-Free_Inversion_of_Suspicious_Trojan_Inputs_via_Latent_Diffusion_ICCV_2025_paper.pdf", areas: ["ml", "cv"], latest: true },
  { thumb: "assets/img/papers/gilbert2025-cell.webp", title: "Neuropeptides specify and reprogram division of labor in the leafcutter ant Atta cephalotes", authors: "Michael B. Gilbert, Karl M. Glastad, Maxxum Fioriti, Matan Sorek, Tierney Scarpa, Freddy S. Purnell, Daniel Xu, Lindsay K. Pino, Anatoly Korotkov, Ali Biashad, Josue Baeza, Richard Lauman, <b>Anastasiia Filippova</b>, Balint Z. Kacsoh, Roberto Bonasio, <b>Mackenzie Weygandt Mathis</b>, Benjamin A. Garcia, Andrei Seluanov, Vera Gorbunova, Shelley L. Berger", venue: "Cell", year: 2025, month: 7, url: "https://www.cell.com/cell/fulltext/S0092-8674(25)00573-2", doi: "10.1016/j.cell.2025.05.023", press: [["Penn News", "https://www.eurekalert.org/news-releases/1088598"], ["The Scientist", "https://www.the-scientist.com/neuropeptides-control-labor-division-in-leafcutter-ants-73218"]], areas: ["cv"] },
  { thumb: "assets/img/papers/vargas2025-neuripsw.webp", title: "Imitation learning of dexterous hand control uncovers muscle-level representations in primate sensorimotor cortex", authors: "Alessandro Marin Vargas, Adriana Perez Rotondo, Alberto Silvio Chiappa, <b>Mackenzie Weygandt Mathis</b>, Alexander Mathis", venue: "NeurIPS Workshop", year: 2025, month: 12, url: "https://openreview.net/forum?id=iNSQcb4W86", areas: ["bio", "neuro"] },
  { thumb: "assets/img/papers/benjamin2025-neuripsw.webp", title: "Towards foundation models of naturalistic collective social-neural dynamics", authors: "Asaf Benjamin, Sergey Anpilov, Omer Izhaki, Maya Sheffer, Tommaso Biagini, Yair Shemesh, Alon Rubin, Inbar Saraf-Sinik, <b>Mackenzie Weygandt Mathis</b>, Alexander Mathis, Alon Chen, Ofer Yizhar", venue: "NeurIPS Workshop", year: 2025, month: 12, url: "https://openreview.net/pdf?id=DIL6fJ9427", areas: ["cv", "neuro"] },
  { thumb: "assets/img/papers/superanimal2024-natcomms.webp", title: "SuperAnimal: Improving pre-training for animal pose estimation", authors: "<b>Shaokai Ye</b>, <b>Maxime Vidal</b>, <b>Steffen Schneider</b>, <b>Tian Qiu</b>, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>†", note: "CV4Animals 2021; later published in Nature Communications 2024.", venue: "CVPR Workshop", year: 2021, month: 6, url: "https://drive.google.com/file/d/1TH63UF9ro2w8DY5G3lwPDMtrLsUbA1Hi/view", areas: ["cv"] },
  { thumb: "assets/img/papers/maDLC2022-natmeth.webp", title: "Adaptive algorithms for bottom-up animal pose estimation", authors: "<b>Jessy Lauer</b>, Mu Zhou, <b>Shaokai Ye</b>, <b>Mackenzie Weygandt Mathis</b>**†, Alexander Mathis**†", note: "CV4Animals 2021; later published in Nature Methods 2022.", venue: "CVPR Workshop", year: 2021, month: 6, url: "https://drive.google.com/file/d/1YbgL-JVFcK_iQBwPJag92YVUvqhoEtAS/view", areas: ["cv"] },
  { thumb: "assets/img/papers/mathis2021-wacv.webp", title: "ImageNet performance correlates with pose estimation robustness and generalization on out-of-domain data", authors: "Alexander Mathis†, <b>Thomas Biasi</b>, <b>Mert Yüksekgönül</b>, Byron Rogers, Matthias Bethge, <b>Mackenzie Weygandt Mathis</b>†", note: "Workshop on Uncertainty and Robustness in Deep Learning; later published at WACV 2021.", venue: "ICML Workshop", year: 2020, month: 7, url: "https://infoscience.epfl.ch/record/281459", areas: ["cv"] },
  { thumb: "assets/img/papers/prima2026-wacv.webp", title: "PRIMA: Boosting Animal Mesh Recovery with Taxonomic Priors and Adaptation-Driven Data Bootstrapping", authors: "<b>Xiaohang Yu</b>, <b>Ti Wang</b>, <b>Mackenzie Weygandt Mathis</b>†", venue: "WACV", year: 2027, month: 1, url: "https://arxiv.org/abs/2606.02366", press: [["Project page", "https://lexiyutou.github.io/PRIMA/"]], areas: ["cv"], latest: true },
  { thumb: "assets/img/papers/bonhoeffer2026-biorxiv.webp", title: "An explainable AI latent space of brain dynamics reveals a cerebello-prefrontal signature of schizophrenia symptoms", authors: "<b>Moritz Bonhoeffer</b>, <b>Paolo Muratore</b>, <b>Mackenzie Weygandt Mathis</b>**†, Indrit Bègue**", venue: "bioRxiv", year: 2026, month: 8, url: "https://www.biorxiv.org/content/10.64898/2026.08.25.746991", doi: "10.64898/2026.08.25.746991", areas: ["neuro", "ml"], latest: true },
  { thumb: "assets/img/papers/achard2025-elife.webp", title: "CellSeg3D: self-supervised 3D cell segmentation for fluorescence microscopy", authors: "<b>Cyril Achard</b>, <b>Timokleia Kousi</b>, <b>Markus Frey</b>, <b>Maxime Vidal</b>, Yves Paychere, Colin Hofmann, <b>Asim Iqbal</b>, <b>Sebastien B. Hausmann</b>, Stéphane Pagès, <b>Mackenzie Weygandt Mathis</b>†", venue: "eLife", year: 2025, month: 6, url: "https://elifesciences.org/articles/99848", doi: "10.7554/eLife.99848", areas: ["cv"] },
  { thumb: "assets/img/papers/jayakumar2025-biorxiv.webp", title: "Mice navigate scent trails using predictive policies", authors: "Siddharth Jayakumar, Nicola Rigolli, Mohammed Mostafizur Rahman, <b>Mackenzie Weygandt Mathis</b>, Massimo Vergassola, Alexander Mathis, Venkatesh N. Murthy", venue: "bioRxiv", year: 2025, month: 9, url: "https://www.biorxiv.org/content/10.1101/2025.08.27.672631", doi: "10.1101/2025.08.27.672631", areas: ["neuro"] },
  { thumb: "assets/img/papers/cebra2023-nature.webp", title: "Dimensionality reduction of time-series data, and systems and devices that use the resultant embeddings", authors: "<b>Steffen Schneider</b>, <b>Mackenzie Weygandt Mathis</b>", note: "Patent (inventors); assigned to EPFL. The method behind CEBRA.", venue: "US Patent", year: 2025, month: 12, url: "https://patents.google.com/patent/US12499131B2/en", areas: ["ml", "neuro"] },
  { thumb: "assets/img/papers/mathis2017-phd.webp", title: "Prediction errors drive learning in a mouse model of motor adaptation", authors: "<b>Mackenzie Weygandt Mathis</b>", note: "PhD thesis.", venue: "Harvard University", year: 2017, url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IhqY9XgAAAAJ&citation_for_view=IhqY9XgAAAAJ:8k81kl-MbHgC", pre: true, areas: ["neuro"] },
  { thumb: "assets/img/papers/schneider2025-aistats.webp", title: "Time-series attribution maps with regularized contrastive learning", authors: "<b>Steffen Schneider</b>, <b>Rodrigo González Laiz</b>, <b>Anastasiia Filippova</b>, <b>Markus Frey</b>, <b>Mackenzie Weygandt Mathis</b>†", note: "An earlier version appeared at the NeurIPS 2023 workshop on self-supervised learning.", venue: "AISTATS", year: 2025, month: 5, url: "https://arxiv.org/abs/2502.12977", areas: ["ml", "neuro"], latest: true },
  { thumb: "assets/img/papers/aros2025-iclr.webp", title: "Adversarially Robust Out-of-Distribution Detection Using Lyapunov-Stabilized Embeddings", authors: "<b>Hossein Mirzaei</b>, <b>Mackenzie Weygandt Mathis</b>†", venue: "ICLR", year: 2025, month: 4, url: "https://arxiv.org/abs/2410.10744", areas: ["ml"], latest: true },
  { thumb: "assets/img/papers/distil-ts2025-arxiv.webp", title: "A Contrastive Teacher-Student Framework for Novelty Detection under Style Shifts", authors: "<b>Hossein Mirzaei</b>, Mojtaba Nafez, Moein Madadi, Arad Maleki, Mahdi Hajialilue, Zeinab Taghavi, Sepehr Rezaee, Ali Ansari, Bahar Dibaei Nia, Kian Shamsaie, Mohammadreza Salehi, <b>Mackenzie Weygandt Mathis</b>, Mahdieh Soleymani Baghshah, Mohammad Sabokrou, Mohammad Hossein Rohban", venue: "arXiv", year: 2025, month: 1, url: "https://arxiv.org/abs/2501.17289", areas: ["cv"] },
  // ---- 2024 ----
  { thumb: "assets/img/papers/mathis2024-cell.webp", title: "Decoding the brain: from neural representations to mechanistic models", authors: "<b>Mackenzie Weygandt Mathis</b>†, Adriana Perez Rotondo, Edward F. Chang, Andreas S. Tolias, Alexander Mathis", venue: "Cell", year: 2024, month: 10, doi: "10.1016/j.cell.2024.08.051", url: "https://www.cell.com/cell/fulltext/S0092-8674(24)00980-2", areas: ["neuro"], latest: true },
  { thumb: "assets/img/papers/musbiomaus2024-biorxiv.webp", title: "Neuro-musculoskeletal modeling reveals muscle-level neural dynamics of adaptive learning in sensorimotor cortex", authors: "<b>Travis DeWolf</b>*, <b>Steffen Schneider</b>*, Paul Soubiran, <b>Adrian Roggenbach</b>, <b>Paolo Muratore</b>, <b>Mackenzie Weygandt Mathis</b>†", venue: "bioRxiv", year: 2024, month: 9, url: "https://www.biorxiv.org/content/10.1101/2024.09.11.612513", doi: "10.1101/2024.09.11.612513", press: [["Project page", "https://www.mausspaun.org/"]], areas: ["cv", "ml", "neuro", "bio"] },
  { thumb: "assets/img/papers/weinreb2024-natmeth.webp", title: "Keypoint-MoSeq: parsing behavior by linking point tracking to pose dynamics", authors: "Caleb Weinreb, Jonah E. Pearl, Sherry Lin, Mohammed Abdal Monium Osman, Libby Zhang, Sidharth Annapragada, Eli Conlin, Red Hoffmann, Sofia Makowska, Winthrop F. Gillis, Maya Jay, <b>Shaokai Ye</b>, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>, Talmo Pereira, Scott W. Linderman**, Sandeep Robert Datta**", venue: "Nature Methods", year: 2024, month: 7, url: "https://www.nature.com/articles/s41592-024-02318-2", areas: ["cv"] },
  { thumb: "assets/img/papers/monosov2024-conb.webp", title: "Ethological computational psychiatry: Challenges and opportunities", authors: "Ilya E. Monosov*, Jan Zimmermann*, Michael J. Frank*, <b>Mackenzie Weygandt Mathis</b>*, Justin T. Baker*", venue: "Current Opinion in Neurobiology", year: 2024, month: 6, doi: "10.1016/j.conb.2024.102881", url: "https://www.sciencedirect.com/science/article/pii/S0959438824000436", areas: ["neuro"] },
  { thumb: "assets/img/papers/superanimal2024-natcomms.webp", title: "SuperAnimal pretrained pose estimation models for behavioral analysis", authors: "<b>Shaokai Ye</b>, <b>Anastasiia Filippova</b>, <b>Jessy Lauer</b>, <b>Steffen Schneider</b>, <b>Maxime Vidal</b>, <b>Tian Qiu</b>, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>†", venue: "Nature Communications", year: 2024, month: 6, url: "https://www.nature.com/articles/s41467-024-48792-2", press: [["EPFL News", "https://actu.epfl.ch/news/unifying-behavioral-analysis-through-animal-founda/"]], areas: ["cv"], latest: true },
  { thumb: "assets/img/papers/chang2024-biorxiv.webp", title: "Molecular and neural mechanisms of behavioural integration in the extended-amygdala", authors: "Simon Chang, Federica Fermani, Lianyun Huang, <b>Steffen Schneider</b>, <b>Mackenzie Weygandt Mathis</b>, Jan M. Deussing, Na Cai", venue: "bioRxiv", year: 2024, month: 4, url: "https://www.biorxiv.org/content/10.1101/2024.04.29.591588", doi: "10.1101/2024.04.29.591588", areas: ["neuro"] },
  // ---- 2023 ----
  { thumb: "assets/img/papers/amadeusgpt2023-neurips.webp", title: "AmadeusGPT: a natural language interface for interactive animal behavioral analysis", authors: "<b>Shaokai Ye</b>, <b>Jessy Lauer</b>, Mu Zhou, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>†", venue: "NeurIPS", year: 2023, month: 12, arxiv: "2307.04858", url: "https://openreview.net/pdf?id=9AcG3Tsyoq", areas: ["cv", "ml"] },
  { thumb: "assets/img/papers/zhou2023-iccv.webp", title: "Rethinking pose estimation in crowds: overcoming the detection information bottleneck and ambiguity", authors: "Mu Zhou*, Lucas Stoffl*, <b>Mackenzie Weygandt Mathis</b>, Alexander Mathis", note: "An earlier version appeared at the CVPR 2023 CV4Animals workshop.", venue: "ICCV", year: 2023, month: 10, press: [["Project page", "https://amathislab.github.io/BUCTD/"]], doi: "10.1109/ICCV51070.2023.01350", url: "https://openaccess.thecvf.com/content/ICCV2023/papers/Zhou_Rethinking_Pose_Estimation_in_Crowds_Overcoming_the_Detection_Information_Bottleneck_ICCV_2023_paper.pdf", areas: ["cv"] },
  { thumb: "assets/img/papers/sandbrink2023-elife.webp", title: "Contrasting action and posture coding with hierarchical deep neural network models of proprioception", authors: "<b>Kai J. Sandbrink</b>*, Pranav Mamidanna*, Claudio Michaelis, Matthias Bethge, <b>Mackenzie Weygandt Mathis</b>**†, Alexander Mathis**†", venue: "eLife", year: 2023, month: 5, url: "https://elifesciences.org/articles/81499", areas: ["ml", "neuro", "bio"] },
  { thumb: "assets/img/papers/cebra2023-nature.webp", title: "Learnable latent embeddings for joint behavioural and neural analysis", authors: "<b>Steffen Schneider</b>*, <b>Jin Hwa Lee</b>*, <b>Mackenzie Weygandt Mathis</b>†", venue: "Nature", year: 2023, month: 5, url: "https://www.nature.com/articles/s41586-023-06031-6", press: [["Project page", "https://cebra.ai"], ["EPFL News", "https://actu.epfl.ch/news/predict-what-a-mouse-sees-by-decoding-brain-signal/"], ["Nature News", "https://www.nature.com/articles/d41586-023-01339-9"]], areas: ["ml", "neuro"] },
  { thumb: "assets/img/papers/balci2023-neuron.webp", title: "A response to claims of emergent intelligence and sentience in a dish", authors: "Fuat Balci, Suliann Ben Hamed, Thomas Boraud, Sébastien G. Bouret, Thomas Brochier, Cédric Brun, Jeremiah Y. Cohen, Etienne Coutureau, Marc Deffains, Valérie Doyère, Georgia G. Gregoriou, J. Alexander Heimel, Bjørg Elisabeth Kilavik, Daeyeol Lee, Eric C. Leuthardt, Zachary F. Mainen, <b>Mackenzie Weygandt Mathis</b>, Ilya E. Monosov, Jérémie Naudé, Amy L. Orsborn, Camillo Padoa-Schioppa, Emmanuel Procyk, Bernardo Sabatini, Jérôme Sallet, Carmen Sandi, Jeffrey D. Schall, Alireza Soltani, Karel Svoboda, Charles R. E. Wilson, Jan Zimmermann", note: "Authors listed alphabetically.", venue: "Neuron", year: 2023, month: 3, doi: "10.1016/j.neuron.2023.02.009", url: "https://www.sciencedirect.com/science/article/pii/S0896627323001137", areas: [] },
  { thumb: "assets/img/papers/frey2023-curbio.webp", title: "NeuroAI: If grid cells are the answer, is path integration the question?", authors: "<b>Markus Frey</b>, <b>Mackenzie Weygandt Mathis</b>, Alexander Mathis", venue: "Current Biology", year: 2023, month: 3, url: "https://www.sciencedirect.com/science/article/pii/S0960982223000659", doi: "10.1016/j.cub.2023.01.031", areas: ["neuro"] },
  { thumb: "assets/img/papers/sainsbury2023-cell.webp", title: "Reaching an understanding of cortico-medullary control of forelimb behaviors", authors: "<b>Thomas Trevelyan James Sainsbury</b>, <b>Mackenzie Weygandt Mathis</b>†", venue: "Cell", year: 2023, month: 1, url: "https://www.sciencedirect.com/science/article/pii/S0092867422015240", doi: "10.1016/j.cell.2022.12.011", areas: ["neuro"] },
  { thumb: "assets/img/papers/mathis2023-nrn.webp", title: "The neocortical column as a universal template for perception and world-model learning", authors: "<b>Mackenzie Weygandt Mathis</b>†", venue: "Nature Reviews Neuroscience", year: 2023, month: 1, url: "https://www.nature.com/articles/s41583-022-00658-6", areas: ["neuro"] },
  // ---- 2022 ----
  { thumb: "assets/img/papers/koch2022-neuron.webp", title: "Next-generation brain observatories", authors: "Christof Koch†, Karel Svoboda†, Amy Bernard, Michele A. Basso, Anne K. Churchland, Adrienne L. Fairhall, Peter A. Groblewski, Jérôme A. Lecoq, Zachary F. Mainen, <b>Mackenzie Weygandt Mathis</b>, Shawn R. Olsen, John W. Phillips, Alexandre Pouget, Shreya Saxena, Josh H. Siegle, Anthony M. Zador", note: "Alphabetical after the corresponding authors.", venue: "Neuron", year: 2022, month: 11, doi: "10.1016/j.neuron.2022.09.033", url: "https://www.sciencedirect.com/science/article/pii/S0896627322008996", areas: ["neuro"] },
  { thumb: "assets/img/papers/akiti2022-neuron.webp", title: "Striatal dopamine explains novelty-induced behavioral dynamics and individual variability in threat prediction", authors: "Korleki Akiti, Iku Tsutsui-Kimura, Yudi Xie, Alexander Mathis, Jeffrey E. Markowitz, Rockwell Anyoha, Sandeep Robert Datta, <b>Mackenzie Weygandt Mathis</b>, Naoshige Uchida, Mitsuko Watabe-Uchida", venue: "Neuron", year: 2022, month: 11, doi: "10.1016/j.neuron.2022.08.022", url: "https://www.sciencedirect.com/science/article/pii/S0896627322007589", areas: ["neuro"] },
  { thumb: "assets/img/papers/maDLC2022-natmeth.webp", title: "Multi-animal pose estimation, identification and tracking with DeepLabCut", authors: "<b>Jessy Lauer</b>, Mu Zhou, <b>Shaokai Ye</b>, William Menegas, <b>Steffen Schneider</b>, <b>Tanmay Nath</b>, Mohammed Mostafizur Rahman, Valentina Di Santo, <b>Daniel Soberanes</b>, Guoping Feng, Venkatesh N. Murthy, George Lauder, Catherine Dulac, <b>Mackenzie Weygandt Mathis</b>**†, Alexander Mathis**†", venue: "Nature Methods", year: 2022, month: 4, url: "https://www.nature.com/articles/s41592-022-01443-0", press: [["EPFL News", "https://actu.epfl.ch/news/time-to-get-social-tracking-animals-with-deep-lear/"]], areas: ["cv"] },
  { thumb: "assets/img/papers/tuia2022-natcomms.webp", title: "Perspectives in machine learning for wildlife conservation", authors: "Devis Tuia, Benjamin Kellenberger, Sara Beery, Blair R. Costelloe, Silvia Zuffi, Benjamin Risse, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>, Frank van Langevelde, Tilo Burghardt, Roland Kays, Holger Klinck, Martin Wikelski, Iain D. Couzin, Grant van Horn, Margaret C. Crofoot, Charles V. Stewart, Tanya Berger-Wolf", venue: "Nature Communications", year: 2022, month: 2, url: "https://www.nature.com/articles/s41467-022-27980-y", press: [["EPFL News", "https://actu.epfl.ch/news/artificial-intelligence-and-big-data-can-help-pres/"]], areas: ["cv", "ml"] },
  // ---- 2021 ----
  { thumb: "assets/img/papers/hausmann2021-conb.webp", title: "Measuring and modeling the motor system with machine learning", authors: "<b>Sebastien B. Hausmann</b>*, Alessandro Marin Vargas*, Alexander Mathis**†, <b>Mackenzie Weygandt Mathis</b>**†", venue: "Current Opinion in Neurobiology", year: 2021, month: 10, doi: "10.1016/j.conb.2021.04.004", url: "https://www.sciencedirect.com/science/article/pii/S0959438821000519", areas: ["ml", "neuro", "bio"] },
  { thumb: "assets/img/papers/acinoset2021-icra.webp", title: "AcinoSet: A 3D Pose Estimation Dataset and Baseline Models for Cheetahs in the Wild", authors: "Daniel Joska, Liam Clark, Naoya Muramatsu, Ricardo Jericevich, Fred Nicolls, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>†, Amir Patel†", venue: "ICRA", year: 2021, month: 5, url: "https://ieeexplore.ieee.org/document/9561338", arxiv: "2103.13282", areas: ["cv", "bio"] },
  { thumb: "assets/img/papers/mann2021-iclrw.webp", title: "Out-of-distribution generalization of internal models is correlated with reward", authors: "Khushdeep Singh Mann*, <b>Steffen Schneider</b>*, Alberto Chiappa, <b>Jin Hwa Lee</b>, Matthias Bethge, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>†", venue: "ICLR Workshop", year: 2021, month: 5, url: "https://openreview.net/pdf?id=hR_TNbCr_nQ", areas: ["ml"] },
  { thumb: "assets/img/papers/mathis2021-curbio.webp", title: "Motor control: Neural correlates of optimal feedback control theory", authors: "<b>Mackenzie Weygandt Mathis</b>†, <b>Steffen Schneider</b>", venue: "Current Biology", year: 2021, month: 4, url: "https://www.sciencedirect.com/science/article/pii/S0960982221001524", doi: "10.1016/j.cub.2021.01.087", areas: ["neuro"] },
  { thumb: "assets/img/papers/mouilleau2021-dev.webp", title: "Dynamic extrinsic pacing of the HOX clock in human axial progenitors controls motor neuron subtype specification", authors: "Vincent Mouilleau, Célia Vaslin, Rémi Robert, Simona Gribaudo, Nour Nicolas, Margot Jarrige, Angélique Terray, Léa Lesueur, <b>Mackenzie Weygandt Mathis</b>, Gist Croft, Mathieu Daynac, Virginie Rouiller-Fabre, Hynek Wichterle, Vanessa Ribes, Cécile Martinat, Stéphane Nedelec", venue: "Development", year: 2021, month: 3, doi: "10.1242/dev.194514", url: "https://dev.biologists.org/content/148/6/dev194514.abstract", areas: ["dev"] },
  { thumb: "assets/img/papers/mathis2021-wacv.webp", title: "Pretraining boosts out-of-domain robustness for pose estimation", authors: "Alexander Mathis*, <b>Thomas Biasi</b>*, <b>Steffen Schneider</b>, <b>Mert Yüksekgönül</b>, Byron Rogers, Matthias Bethge, <b>Mackenzie Weygandt Mathis</b>†", venue: "WACV", year: 2021, month: 1, url: "https://arxiv.org/abs/1909.11229", areas: ["cv"] },
  // ---- 2020 ----
  { thumb: "assets/img/papers/kane2020-elife.webp", title: "Real-time, low-latency closed-loop feedback using markerless posture tracking", authors: "<b>Gary A. Kane</b>, Gonçalo Lopes, Jonny L. Saunders, Alexander Mathis, <b>Mackenzie Weygandt Mathis</b>†", venue: "eLife", year: 2020, month: 12, url: "https://elifesciences.org/articles/61909", press: [["EPFL News", "https://actu.epfl.ch/news/deeplabcut-live-real-time-marker-less-motion-captu/"]], areas: ["cv"] },
  { thumb: "assets/img/papers/schneider2020-neuripsw.webp", title: "Generalized Invariant Risk Minimization: relating adaptation and invariant representation learning", authors: "<b>Steffen Schneider</b>, Shubham Krishna, Luisa Eck, Wieland Brendel, <b>Mackenzie Weygandt Mathis</b>, Matthias Bethge", venue: "NeurIPS Workshop", year: 2020, month: 12, url: "https://preregister.science/papers_20neurips/57_paper.pdf", areas: ["ml"] },
  { thumb: "assets/img/papers/mathis2020-neuron.webp", title: "A Primer on Motion Capture with Deep Learning: Principles, Pitfalls, and Perspectives", authors: "Alexander Mathis†, <b>Steffen Schneider</b>, <b>Jessy Lauer</b>, <b>Mackenzie Weygandt Mathis</b>†", venue: "Neuron", year: 2020, month: 10, doi: "10.1016/j.neuron.2020.09.017", url: "https://www.cell.com/neuron/fulltext/S0896-6273(20)30717-0", areas: ["cv"] },
  { thumb: "assets/img/papers/mathis2020-conb.webp", title: "Deep learning tools for the measurement of animal behavior in neuroscience", authors: "<b>Mackenzie Weygandt Mathis</b>†, Alexander Mathis†", venue: "Current Opinion in Neurobiology", year: 2020, month: 2, doi: "10.1016/j.conb.2019.10.008", url: "https://www.sciencedirect.com/science/article/pii/S0959438819301151", areas: ["cv", "neuro"] },
  // ---- 2019 ----
  { thumb: "assets/img/papers/mathis2019-natneuro.webp", title: "A new spin on fidgets", authors: "<b>Mackenzie Weygandt Mathis</b>†", venue: "Nature Neuroscience", year: 2019, month: 9, url: "https://www.nature.com/articles/s41593-019-0504-2", areas: ["neuro"] },
  { thumb: "assets/img/papers/nath2019-natprot.webp", title: "Using DeepLabCut for 3D markerless pose estimation across species and behaviors", authors: "<b>Tanmay Nath</b>*, Alexander Mathis*, An Chi Chen, Amir Patel, Matthias Bethge, <b>Mackenzie Weygandt Mathis</b>†", venue: "Nature Protocols", year: 2019, month: 6, url: "https://www.nature.com/articles/s41596-019-0176-0", areas: ["cv"] },
  // ---- 2018 ----
  { thumb: "assets/img/papers/dlc2018-natneuro.webp", title: "DeepLabCut: markerless pose estimation of user-defined body parts with deep learning", authors: "<b>Alexander Mathis</b>, Pranav Mamidanna, Kevin M. Cury, <b>Taiga Abe</b>, Venkatesh N. Murthy, <b>Mackenzie Weygandt Mathis</b>**†, Matthias Bethge**", venue: "Nature Neuroscience", year: 2018, month: 8, url: "https://www.nature.com/articles/s41593-018-0209-y", press: [["Project page", "https://deeplabcut.org"], ["Harvard Gazette", "https://news.harvard.edu/gazette/story/2018/08/an-open-source-ai-tool-available-to-study-movement-across-behaviors-and-species/"], ["The Atlantic", "https://www.theatlantic.com/science/archive/2018/07/deeplabcut-tracking-animal-movements/564338/"]], areas: ["cv"] },
  // ---- 2017 ----
  { thumb: "assets/img/papers/mathis2017-neuron.webp", title: "Somatosensory cortex plays an essential role in forelimb motor adaptation in mice", authors: "<b>Mackenzie Weygandt Mathis</b>†, Alexander Mathis, Naoshige Uchida†", venue: "Neuron", year: 2017, month: 3, doi: "10.1016/j.neuron.2017.02.049", url: "https://www.cell.com/neuron/fulltext/S0896-6273%2817%2930157-5", press: [["Harvard MCB News", "https://www.mcb.harvard.edu/research/moved-arm-learning-performance-error-uchida-lab/"]], pre: true, areas: ["neuro"] },
  // ---- 2016 ----
  { thumb: "assets/img/papers/ho2016-natneuro.webp", title: "ALS disrupts spinal motor neuron maturation and aging pathways within gene co-expression networks", authors: "Ritchie Ho, Samuel Sances, Genevieve Gowing, <b>Mackenzie Weygandt Amoroso</b>, Jacqueline G. O'Rourke, Anais Sahabian, Hynek Wichterle, Robert H. Baloh, Dhruv Sareen, Clive N. Svendsen", venue: "Nature Neuroscience", year: 2016, month: 7, url: "https://www.nature.com/articles/nn.4345", areas: ["dev"], pre: true },
  { thumb: "assets/img/papers/li2016-cellrep.webp", title: "Protein prenylation constitutes an endogenous brake on axonal growth", authors: "Hai Li, Takaaki Kuwajima, Derek Oakley, Elena Nikulina, Jianwei Hou, Wan Seok Yang, Emily Rhodes Lowry, Nuno Jorge Lamas, <b>Mackenzie Weygandt Amoroso</b>, Gist F. Croft, Raghavendra Hosur, Hynek Wichterle, Said Sebti, Marie T. Filbin, Brent Stockwell, Christopher E. Henderson", venue: "Cell Reports", year: 2016, month: 7, doi: "10.1016/j.celrep.2016.06.013", url: "https://www.sciencedirect.com/science/article/pii/S2211124716307379", areas: ["dev"], pre: true },
  // ---- 2015 ----
  { thumb: "assets/img/papers/cohen2015-elife.webp", title: "Serotonergic neurons signal reward and punishment on multiple timescales", authors: "Jeremiah Y. Cohen, <b>Mackenzie Weygandt Amoroso</b>, Naoshige Uchida", venue: "eLife", year: 2015, month: 2, url: "https://doi.org/10.7554/eLife.06346", press: [["Harvard MCB News", "https://www.mcb.harvard.edu/?p=3289"]], areas: ["neuro"], pre: true },
  // ---- 2014 ----
  { thumb: "assets/img/papers/re2014-neuron.webp", title: "Necroptosis drives motor neuron death in models of both sporadic and familial ALS", authors: "Diane B. Re*, Virginia Le Verche*, Changhao Yu, <b>Mackenzie Weygandt Amoroso</b>, Kristin A. Politi, Sudarshan Phani, Burcin Ikiz, Lucas Hoffmann, Martijn Koolen, Tetsuya Nagata, Dimitra Papadimitriou, Peter Nagy, Hiroshi Mitsumoto, Shingo Kariya, Hynek Wichterle, Christopher E. Henderson, Serge Przedborski", venue: "Neuron", year: 2014, month: 3, url: "https://www.ncbi.nlm.nih.gov/pubmed/24508385", press: [["Columbia News", "https://www.cuimc.columbia.edu/node/1730"]], areas: ["dev"], pre: true },
  // ---- 2013 ----
  { thumb: "assets/img/papers/amoroso2013-jneurosci.webp", title: "Accelerated high-yield generation of limb-innervating motor neurons from human stem cells", authors: "<b>Mackenzie Weygandt Amoroso</b>*, Gist F. Croft*, Damian J. Williams, Sean O'Keeffe, Monica A. Carrasco, Anne R. Davis, Laurent Roybon, Derek H. Oakley, Tom Maniatis, Christopher E. Henderson, Hynek Wichterle", venue: "Journal of Neuroscience", year: 2013, month: 1, url: "https://www.ncbi.nlm.nih.gov/pubmed/23303937", areas: ["dev"], pre: true },
  // ---- 2012 ----
  { thumb: "assets/img/papers/takazawa2012-plosone.webp", title: "Maturation of spinal motor neurons derived from human embryonic stem cells", authors: "Tomonori Takazawa, Gist F. Croft, <b>Mackenzie Weygandt Amoroso</b>, Lorenz Studer, Hynek Wichterle, Amy B. MacDermott", venue: "PLOS ONE", year: 2012, month: 7, doi: "10.1371/journal.pone.0040154", url: "http://scholar.harvard.edu/mwamoroso/publications/maturation-spinal-motor-neurons-derived-human-embryonic-stem-cells", areas: ["dev"], pre: true },
  { thumb: "assets/img/papers/nedelec2012-jneurosci.webp", title: "Concentration-dependent requirement for local protein synthesis in motor neuron subtype-specific response to axon guidance cues", authors: "Stéphane Nédelec, Mirza Peljto, Peng Shi, <b>Mackenzie Weygandt Amoroso</b>, Lance C. Kam, Hynek Wichterle", venue: "Journal of Neuroscience", year: 2012, month: 1, url: "https://www.ncbi.nlm.nih.gov/pubmed/22279234", doi: "10.1523/JNEUROSCI.4176-11.2012", areas: ["dev"], pre: true },
  // ---- 2011 ----
  { thumb: "assets/img/papers/boulting2011-natbiotech.webp", title: "A functionally characterized test set of human induced pluripotent stem cells", authors: "Gabriella L. Boulting*, Evangelos Kiskinis*, Gist F. Croft*, <b>Mackenzie Weygandt Amoroso</b>*, Derek H. Oakley*, Brian J. Wainger, Damian J. Williams, David J. Kahler, Mariko Yamaki, Lance Davidow, Christopher T. Rodolfa, John T. Dimos, Shravani Mikkilineni, Amy B. MacDermott, Clifford J. Woolf, Christopher E. Henderson, Hynek Wichterle, Kevin Eggan", venue: "Nature Biotechnology", year: 2011, month: 2, url: "https://www.ncbi.nlm.nih.gov/pubmed/21293464", press: [["Harvard Gazette", "https://news.harvard.edu/gazette/story/2011/02/two-studies-prove-value-of-ips-cells/"]], areas: ["dev"], pre: true },
  { thumb: "assets/img/papers/bock2011-cell.webp", title: "Reference maps of human ES and iPS cell variation enable high-throughput characterization of pluripotent cell lines", authors: "Christoph Bock*, Evangelos Kiskinis*, Griet Verstappen*, Hongcang Gu, Gabriella Boulting, Zachary D. Smith, Michael Ziller, Gist F. Croft, <b>Mackenzie Weygandt Amoroso</b>, Derek H. Oakley, Andreas Gnirke, Kevin Eggan, Alexander Meissner", venue: "Cell", year: 2011, month: 2, doi: "10.1016/j.cell.2010.12.032", url: "http://scholar.harvard.edu/mwamoroso/publications/reference-maps-human-es-and-ips-cell-variation-enable-high-throughput", press: [["Harvard Gazette", "https://news.harvard.edu/gazette/story/2011/02/two-studies-prove-value-of-ips-cells/"]], areas: ["dev"], pre: true }
];

/* News: newest period first. type = "paper" | "award" | "grant" | "people"
   images (optional): photos shown under that period */
MLAB.news = [
  { period: "Fall 2026", items: [
    { type: "grant", text: "Our team is awarded CHF 4 million from the Horten Health Foundation for ATHENA-II, a clinical trial of connectivity-guided cerebellar brain stimulation to treat apathy in schizophrenia. Indrit Bègue (UNIGE/HUG) leads the consortium; the M-Lab leads its AI pillar.", links: [["Campus Biotech", "https://campusbiotech.ch/athena-ii-connectivity-guided-brain-stimulation-to-treat-apathy-in-schizophrenia/"]] },
    { type: "paper", text: "PRIMA, which uses biological priors and test-time adaptation to recover 3D animal meshes, is accepted to WACV 2027 (Xiaohang Yu, Ti Wang, Mackenzie Weygandt Mathis).", links: [["Project page", "https://lexiyutou.github.io/PRIMA/"], ["Preprint", "https://arxiv.org/abs/2606.02366"]] },
    { type: "paper", text: "New preprint: PSI (Programmable Semantic Interventions) finds the subspace of a frozen language model's activations that carries a named variable, without labels (Paolo Muratore, Mackenzie Weygandt Mathis).", links: [["Preprint", "https://arxiv.org/abs/2611.21307"], ["Project page", "https://adaptivemotorcontrollab.github.io/psi/"]] }
  ]},
  { period: "Summer 2026", items: [
    { type: "paper", text: "Our work showing that mice actively seek better views to make visual decisions is published in Current Biology (Célia Benquet, Thomas Sainsbury, Léo Bruneau, Mariia Popova and collaborators).", links: [["Paper", "https://www.cell.com/current-biology/fulltext/S0960-9822(26)00722-0"], ["EPFL News", "https://actu.epfl.ch/news/mice-actively-seek-better-views-to-make-visual-d-2/"]] }
  ]},
  { period: "Winter / Spring 2026", items: [
    { type: "paper", text: "FMPose3D, our state-of-the-art monocular 3D pose estimation method, is published at CVPR 2026 (Ti Wang, Xiaohang Yu, Mackenzie Weygandt Mathis).", links: [["Paper", "https://xiu-cs.github.io/FMPose3D/"]] },
    { type: "paper", text: "LLaVAction, the lab's first multimodal LLM for action understanding, is published at ICLR 2026.", links: [["Paper", "https://arxiv.org/abs/2503.18712"]] },
    { type: "paper", text: "Mackenzie Weygandt Mathis's piece on leveraging neuroscience for more adaptive AI is published in Nature Neuroscience.", links: [["Paper", "https://www.nature.com/articles/s41593-025-02169-w"]] },
    { type: "paper", text: "Our review on jointly modeling neural and behavioral data is published in Nature Reviews Neuroscience.", links: [["Paper", "https://www.nature.com/articles/s41583-025-00996-1"]] },
    { type: "people", text: "The software team grows: Jaap, Cyril and Leonardo join to support the SCENE collaboration and DeepLabCut.", links: [["SCENE", "https://project-scene.org"]] }
  ]},
  { period: "Summer / Fall 2025", images: ["assets/img/news/news-247b158b61.webp", "assets/img/news/news-be936da0a8.webp", "assets/img/news/news-f7f848cda2.webp"], items: [
    { type: "grant", text: "The lab joins the Simons Collaboration on Ecological Neuroscience (SCENE) with $8M in funding from the Simons Foundation, kicking off in July 2025. Mackenzie Weygandt Mathis heads the data science core and joins the mouse and theory teams.", links: [["project-scene.org", "https://project-scene.org"]] },
    { type: "award", text: "Mackenzie Weygandt Mathis receives the 2025 SGV Award for non-invasive animal tracking with DeepLabCut." },
    { type: "people", text: "Ti Wang and Xiaohang Yu pass their candidacy exams; Ananda Wolz and Sander Meisen complete their master's theses." },
    { type: "paper", text: "DISTIL is accepted to ICCV 2025 (Hossein Mirzaei, with interns Zeinab Taghavi, Sepehr Rezaee, Masoud Hadi and Moein Madadi).", links: [["Paper", "https://arxiv.org/abs/2507.22813"]] },
    { type: "people", text: "Hossein Mirzaei passes his candidacy exam." },
    { type: "award", text: "Célia Benquet is accepted to the EPFL PhD Excellence Program.", links: [["EPFL PhD Excellence Program", "https://actu.epfl.ch/news/welcoming-the-fourth-cohort-of-the-phd-excellenc-3/"]] },
    { type: "paper", text: "A collaborative study analyzing ant behavior is published in Cell (Anastasiia, Mackenzie Weygandt Mathis).", links: [["Paper", "https://www.cell.com/cell/fulltext/S0092-8674(25)00573-2"]] },
    { type: "people", text: "Shaokai Ye earns his PhD (AmadeusGPT, SuperAnimal, LLaVAction) and moves to Apple.", links: [["AmadeusGPT", "software.html#amadeusgpt"], ["SuperAnimal", "https://www.nature.com/articles/s41467-024-48792-2"], ["LLaVAction", "https://llavaction.epfl.ch/"]] },
    { type: "people", text: "Ruth Gutjahr and Artur Schneider join as postdocs." },
    { type: "paper", text: "Our preprint on sensorimotor neural dynamics and mouse arm biomechanics is updated on bioRxiv (postdoc Paolo Muratore).", links: [["MusBioMaus", "https://www.mausspaun.org/"], ["Preprint", "https://www.biorxiv.org/content/10.1101/2024.09.11.612513v3"]] }
  ]},
  { period: "Winter / Spring 2025", images: ["assets/img/news/news-b247909f3c.webp", "assets/img/news/news-a4443e27ec.webp", "assets/img/news/news-99ead6b026.webp", "assets/img/news/news-d3ceed45e9.webp"], items: [
    { type: "paper", text: "AROS is accepted to ICLR 2025 (Hossein Mirzaei, Mackenzie Weygandt Mathis).", links: [["Paper", "https://arxiv.org/abs/2410.10744"]] },
    { type: "paper", text: "COBRA is accepted to ICLR 2025 (Hossein Mirzaei).", links: [["Paper", "https://arxiv.org/pdf/2501.15434"]] },
    { type: "paper", text: "Time-series attribution maps are accepted to AISTATS 2025 (Steffen, Rodrigo, Anastasiia, Markus, Mackenzie Weygandt Mathis).", links: [["Paper", "https://arxiv.org/abs/2502.12977"]] },
    { type: "grant", text: "The lab receives an SNSF Starting Grant (CHF 1.5M) to study the neural dynamics of visuomotor learning." },
    { type: "people", text: "Sebastien Hausmann earns his PhD." },
    { type: "paper", text: "Hossein Mirzaei's contrastive teacher–student framework for novelty detection is preprinted.", links: [["Preprint", "https://arxiv.org/abs/2501.17289"]] },
    { type: "people", text: "Paolo Muratore joins as a postdoc." },
    { type: "award", text: "CEBRA receives the Swiss Society for Neuroscience best paper award (accepted by Dr. Steffen Schneider).", links: [["Best paper award", "https://swissneuroscience.ch/our-support/publication-awards/"]] },
    { type: "award", text: "Mackenzie Weygandt Mathis is co-awarded the Robert Bing Prize from the Swiss Academy of Medical Sciences, with Alexander Mathis and Susanne Wegener.", links: [["Swiss Academy of Medical Sciences", "https://www.samw.ch/en.html"]] }
  ]},
  { period: "Summer / Fall 2024", items: [
    { type: "award", text: "Mackenzie Weygandt Mathis is awarded the Swiss Science Prize Latsis 2024.", links: [["Swiss Science Prize Latsis", "https://www.snf.ch/en/ZsCZuO5EfyWR8yIy/page/swiss-science-prize-latsis"]] },
    { type: "people", text: "Hossein Mirzaei, Ti Wang and Xiaohang Yu join as PhD students." },
    { type: "grant", text: "The Kavli Foundation supports DeepLabCut and AmadeusGPT through the CZI EOSS Program.", links: [["Kavli Foundation", "https://www.kavlifoundation.org/news/empowering-neuroscience-through-open-source-software"]] },
    { type: "grant", text: "Alexander Mathis and Mackenzie Weygandt Mathis are awarded an SNSF Project Grant (CHF 1.2M)." },
    { type: "paper", text: "CellSeg3D is preprinted and reviewed at eLife (Cyril).", links: [["EPFL News", "https://actu.epfl.ch/news/self-supervised-label-free-3d-cell-imaging-is-here/"], ["CellSeg3D", "https://github.com/AdaptiveMotorControlLab/CellSeg3d"]] },
    { type: "award", text: "Mackenzie Weygandt Mathis and Alexander Mathis give the FENS 2024 Kandel Prize Lecture in Vienna." }
  ]},
  { period: "Winter / Spring 2024", images: ["assets/img/news/news-53d2fb9457.webp", "assets/img/news/news-0686d97fab.webp", "assets/img/news/news-bb05721350.webp", "assets/img/news/news-4efb3c09d5.webp", "assets/img/news/news-491b5a6b6e.webp"], items: [
    { type: "paper", text: "SuperAnimal is accepted in Nature Communications (Shaokai Ye), with a companion paper in Nature Methods.", links: [["Paper", "https://www.nature.com/articles/s41467-024-48792-2"], ["Companion paper", "https://www.nature.com/articles/s41592-024-02318-2"], ["EPFL news", "https://actu.epfl.ch/news/unifying-behavioral-analysis-through-animal-founda/"]] },
    { type: "people", text: "Célia Benquet becomes a PhD candidate." },
    { type: "award", text: "DeepLabCut receives the Frontiers of Science Award 2023.", links: [["Frontiers of Science Award", "https://2023.icbs.cn/en/web/index/18009_1581229__"]] }
  ]},
  { period: "Summer / Fall 2023", items: [
    { type: "paper", text: "AmadeusGPT is accepted to NeurIPS 2023 (Shaokai Ye, Jessy Lauer, Mackenzie Weygandt Mathis).", links: [["Paper", "https://openreview.net/pdf?id=9AcG3Tsyoq"]] },
    { type: "award", text: "Mackenzie Weygandt Mathis is awarded the 2023/24 Eric Kandel Young Neuroscientists Prize, with Alexander Mathis.", links: [["Eric Kandel Young Neuroscientists Prize", "https://www.ghst.de/en/kandelprize"], ["Süddeutsche Zeitung", "https://pressemitteilungen.sueddeutsche.de/gemeinnutzige-hertie-stiftung-5563772"]] },
    { type: "award", text: "The original DeepLabCut paper receives the Frontiers of Science Award 2023.", links: [["Frontiers of Science Award", "https://2023.icbs.cn/en/web/index/18009_1581229__"]] },
    { type: "people", text: "Steffen Schneider will start his own research group at Helmholtz AI in spring 2024.", links: [["Helmholtz AI group", "https://dynamical-inference.ai"]] },
    { type: "paper", text: "Our work on pose estimation in crowded scenes is accepted to ICCV 2023.", links: [["Paper", "https://openaccess.thecvf.com/content/ICCV2023/papers/Zhou_Rethinking_Pose_Estimation_in_Crowds_Overcoming_the_Detection_Information_Bottleneck_ICCV_2023_paper.pdf"]] },
    { type: "paper", text: "Our study of proprioception with hierarchical models is published in eLife (co-first authors Kai and Pranav).", links: [["Paper", "https://elifesciences.org/articles/81499"]] },
    { type: "people", text: "Célia Benquet joins as a PhD student." }
  ]},
  { period: "Winter / Spring 2023", items: [
    { type: "paper", text: "CEBRA is published in Nature (Steffen Schneider, Jin Lee), with coverage in more than 40 news outlets.", links: [["EPFL News", "https://actu.epfl.ch/news/predict-what-a-mouse-sees-by-decoding-brain-signal/"], ["Paper", "https://www.nature.com/articles/s41586-023-06031-6"], ["Research Briefing", "https://www.nature.com/articles/d41586-023-01339-9"], ["cebra.ai", "https://cebra.ai"], ["News coverage", "https://nature.altmetric.com/details/125945062/news"]] },
    { type: "paper", text: "SuperAnimal models are released in DeepLabCut, with an arXiv paper led by Shaokai Ye." },
    { type: "paper", text: "A review in Cell (Thomas Sainsbury) and a Dispatch in Current Biology (Markus Frey) are published.", links: [["Cell review", "https://www.sciencedirect.com/science/article/pii/S0092867422015240"], ["Current Biology Dispatch", "https://www.sciencedirect.com/science/article/pii/S0960982223000659"]] },
    { type: "people", text: "The CEBRA dev team runs its first workshops." }
  ]},
  { period: "Summer / Fall 2022", items: [
    { type: "award", text: "Mackenzie Weygandt Mathis is named a Vallee Foundation Scholar." },
    { type: "paper", text: "Multi-animal DeepLabCut (Jessy Lauer) is featured in Nature.", links: [["Nature", "https://www.nature.com/articles/d41586-022-02964-6"]] }
  ]},
  { period: "Winter / Spring 2022", items: [
    { type: "grant", text: "Radala Foundation funding supports ALS research with the Schneider and Courtine labs." },
    { type: "paper", text: "Our call to action on machine learning for wildlife conservation is published in Nature Communications.", links: [["EPFL News", "https://actu.epfl.ch/news/artificial-intelligence-and-big-data-can-help-pres/"], ["Paper", "https://www.nature.com/articles/s41467-022-27980-y"]] },
    { type: "grant", text: "CZI funds a napari plugin system for DeepLabCut." },
    { type: "paper", text: "Multi-animal DeepLabCut is published in Nature Methods (Jessy Lauer).", links: [["EPFL News", "https://actu.epfl.ch/news/time-to-get-social-tracking-animals-with-deep-lear/"], ["Paper", "https://www.nature.com/articles/s41592-022-01443-0"]] }
  ]},
  { period: "Summer / Fall 2021", items: [
    { type: "award", text: "Steffen Schneider is awarded a 2021 Google PhD Fellowship.", links: [["Google PhD Fellowship", "https://research.google/outreach/phd-fellowship/recipients/"]] },
    { type: "people", text: "Shaokai Ye becomes a PhD candidate." },
    { type: "paper", text: "Two papers are accepted to the CVPR CV4Animals workshop, a new multi-animal DeepLabCut preprint is posted, and Mackenzie Weygandt Mathis gives a keynote.", links: [["Keynote talk", "https://www.youtube.com/watch?v=U39OAOpSraw"]] },
    { type: "grant", text: "A Novartis grant supports the EPFL MausHaus." },
    { type: "people", text: "Sebastien Hausmann passes his candidacy exam." },
    { type: "award", text: "Mackenzie Weygandt Mathis is awarded the FENS EJN 2022 Young Investigator Prize." }
  ]},
  { period: "Winter / Spring 2021", items: [
    { type: "paper", text: "A paper is accepted to the ICML SSL-RL Workshop (Steffen Schneider, Jin Lee)." },
    { type: "paper", text: "A Current Biology Dispatch on motor control is published (Steffen Schneider).", links: [["Dispatch", "https://www.sciencedirect.com/science/article/pii/S0960982221001524"]] },
    { type: "grant", text: "An SNSF grant supports our work on forelimb motor adaptation." },
    { type: "paper", text: "Thomas Biasi's first-author WACV 2021 paper, with a benchmark by Steffen Schneider; Thomas interns at Amazon.", links: [["Paper", "https://arxiv.org/abs/1909.11229"]] },
    { type: "people", text: "Mert Yüksekgönül is accepted to several top CS programs and heads to Stanford for his PhD." },
    { type: "people", text: "Valentin Bruttin graduates from EPFL with top marks." },
    { type: "paper", text: "3D cheetah modeling with Amir Patel's group is accepted to ICRA 2021.", links: [["Paper", "https://ieeexplore.ieee.org/document/9561338"]] }
  ]},
  { period: "Fall / Winter 2020", items: [
    { type: "paper", text: "Our real-time, low-latency behavior tracking paper is published in eLife (alumnus Gary Kane).", links: [["EPFL News", "https://actu.epfl.ch/news/deeplabcut-live-real-time-marker-less-motion-captu/"], ["Paper", "https://elifesciences.org/articles/61909"], ["Press release", "https://www.eurekalert.org/pub_releases/2020-12/epfd-drm120920.php"], ["Radio (RTS)", "https://www.rts.ch/play/radio/cqfd/audio/capturer-les-mouvements-des-animaux-en-temps-reel?id=11782529"]] },
    { type: "paper", text: "A Primer on Motion Capture with Deep Learning is published in Neuron.", links: [["Paper", "https://doi.org/10.1016/j.neuron.2020.09.017"]] },
    { type: "paper", text: "Steffen Schneider's work is accepted to a NeurIPS 2020 workshop.", links: [["Paper", "https://preregister.science/papers_20neurips/57_paper.pdf"]] }
  ]},
  { period: "Summer 2020", items: [
    { type: "people", text: "The lab moves to EPFL (Campus Biotech, Geneva) with support from the Bertarelli Foundation; Mackenzie Weygandt Mathis is appointed Bertarelli Foundation Chair of Integrative Neuroscience.", links: [["Campus Biotech", "https://www.campusbiotech.ch/en/"], ["Bertarelli Foundation Chair", "https://www.campusbiotech.ch/en/node/581"]] },
    { type: "paper", text: "Our work on robustness in animal pose estimation is accepted to the ICML 2020 UDL Workshop.", links: [["ICML 2020 UDL Workshop", "https://sites.google.com/view/udlworkshop2020/accepted-papers?authuser=0"]] },
    { type: "people", text: "Daniel Soberanes graduates from Harvard College." },
    { type: "people", text: "Kai Sandbrink graduates from ETH Zurich and posts his first-author preprint on bioRxiv.", links: [["Preprint", "https://www.biorxiv.org/content/10.1101/2020.05.06.081372v2"]] },
    { type: "award", text: "Thomas Biasi is awarded the Herschel-Smith Fellowship." }
  ]},
  { period: "Winter / Spring 2020", items: [
    { type: "people", text: "We host the second DeepLabCut workshop and our first hackathon, and attend the CZI EOSS meeting.", links: [["DeepLabCut", "deeplabcut.html"]] }
  ]},
  { period: "Summer / Fall 2019", items: [
    { type: "grant", text: "CZI awards a grant to support DeepLabCut.", links: [["DeepLabCut", "https://www.deeplabcut.org"]] },
    { type: "paper", text: "Nature covers two of our articles: DeepLabCut, and two-photon imaging during motor adaptation.", links: [["DeepLabCut in Nature", "https://www.nature.com/articles/d41586-019-02942-5"], ["Motor adaptation in Nature", "https://www.nature.com/articles/d41586-019-03632-y"]] },
    { type: "paper", text: "Bloomberg Businessweek covers the lab's work.", links: [["Bloomberg Businessweek", "https://www.bloomberg.com/news/features/2019-06-18/apple-google-and-facebook-are-raiding-animal-research-labs"]] },
    { type: "paper", text: "DeepLabCut 2.0 is published in Nature Protocols, with the team featured on the cover.", links: [["Paper", "https://www.nature.com/articles/s41596-019-0176-0"], ["Code", "https://github.com/DeepLabCut/DeepLabCut"]] }
  ]},
  { period: "Fall / Winter 2018", items: [
    { type: "people", text: "The first DeepLabCut workshop takes place in January 2019." },
    { type: "paper", text: "November: DeepLabCut extensions are accepted to Cosyne 2019, and an NCM 2019 talk is accepted.", links: [["DeepLabCut", "deeplabcut.html"]] },
    { type: "people", text: "September: Adrian receives his master's degree." },
    { type: "paper", text: "August: DeepLabCut is published in Nature Neuroscience.", links: [["Paper", "https://www.nature.com/articles/s41593-018-0209-y"]] },
    { type: "paper", text: "The NVIDIA Developer Blog highlights DeepLabCut.", links: [["NVIDIA Developer Blog", "https://news.developer.nvidia.com/ai-enables-markerless-animal-tracking/"]] },
    { type: "paper", text: "July: The Atlantic covers the DeepLabCut preprint.", links: [["The Atlantic", "https://www.theatlantic.com/science/archive/2018/07/deeplabcut-tracking-animal-movements/564338/"]] },
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
    { title: "On the inference speed and video-compression robustness of DeepLabCut", authors: "Alexander Mathis, Richard Warren", venue: "bioRxiv", year: 2018, url: "https://www.biorxiv.org/content/10.1101/457242v1", doi: "10.1101/457242", areas: ["cv"] }
  ]
};

/* Research area pages (research-<key>.html). Projects point at publications by title
   prefix ("pub"), so venue, year, link and thumbnail come from MLAB.publications. */
MLAB.research = {
  cv: {
    name: "Computer vision", accent: "teal",
    title: "Robustly measure behavior",
    lede: "MLAI develops machine learning and computer vision approaches to measure, reconstruct and understand animal movement and behavior from video, particularly in settings where labeled data are scarce and behaviors are complex.",
    intro: [
      "Our work includes markerless pose estimation, pretrained animal foundation models, 3D pose reconstruction from single-camera recordings, and multimodal models for action and behavior understanding. Beyond tracking keypoints, we aim to capture the full visual and functional complexity of movement, with a focus on pose, body shape and action: how bodies are configured, how they move, and what actions they perform.",
      "A central direction is to bridge computer vision and biomechanics by connecting visual observations to body structure, musculoskeletal models and the underlying mechanics of movement. Ultimately, we seek to move beyond describing behavior in pixels toward understanding how the body produces movement, how movement relates to function, and how these processes connect to neural control and adaptation."
    ],
    /* several slides rotate in the header; "fit": "contain" keeps wide videos uncropped */
    media: [
      { video: "assets/video/reel/cheetah.mp4", poster: "assets/video/reel/cheetah.jpg", alt: "A cheetah tracked with DeepLabCut", caption: "DeepLabCut tracking a cheetah", link: "deeplabcut.html" },
      { video: "assets/video/fmpose3d-biomech.mp4", poster: "assets/video/fmpose3d-biomech.jpg", fit: "contain", alt: "A runner filmed with one camera, the 3D pose FMPose3D recovers, and a skeletal model driven by that pose", caption: "FMPose3D: from one camera to 3D pose to a skeletal model", link: "https://xiu-cs.github.io/FMPose3D/" },
      { video: "assets/video/prima-davis.mp4", poster: "assets/video/prima-davis.jpg", fit: "contain", alt: "PRIMA fitting 3D body meshes to a cow, a dog, a horse and a bear in video", caption: "PRIMA: 3D animal body meshes from video", link: "https://lexiyutou.github.io/PRIMA/" }
    ],
    projects: [
      { name: "FMPose3D", pub: "FMPose3D", tag: "3D pose from a single camera, with flow matching.", video: "assets/video/fmpose3d.mp4", poster: "assets/video/fmpose3d-poster.jpg", links: [["Project page", "https://xiu-cs.github.io/FMPose3D/"]] },
      { name: "PRIMA", pub: "PRIMA", tag: "3D animal body meshes from images, guided by taxonomic priors.", links: [["Project page", "https://lexiyutou.github.io/PRIMA/"]] },
      { name: "SuperAnimal", pub: "SuperAnimal pretrained pose estimation models", tag: "Pretrained pose estimation models for behavioral analysis across species.", links: [["DeepLabCut", "deeplabcut.html"]] },
      { name: "LLaVAction", pub: "LLaVAction", tag: "Multimodal large language models for action understanding.", links: [["Project page", "https://llavaction.epfl.ch/"]] },
      { name: "Brown bear ID", pub: "Individual identification of brown bears", tag: "Recognizing individual bears with pose-aware metric learning." }
    ]
  },
  bio: {
    name: "Biomechanics", accent: "blue",
    title: "Biomechanics at MLAI",
    lede: "MLAI develops biomechanical approaches to understand how body structure, muscle activity and neural control interact to produce movement.",
    intro: [
      "Our work spans musculoskeletal modeling across species, from modeling and analyzing the human arm using OpenSim to developing our own biomechanical model of the mouse arm in MuJoCo. Building on this foundation, we are now extending our work across species and developing the sugar glider as a new model organism for investigating neural-body dynamics.",
      "Our research combines musculoskeletal modeling, body-constrained 3D pose estimation and movement analysis to connect observed kinematics with underlying muscle function and biomechanics. A central goal is to understand movement as a continuous interaction between the brain, muscles and body: how neural commands shape muscle activity, how muscles generate movement, and how sensory feedback from the moving body informs and influences the brain. By linking computer vision, biomechanical models and neural dynamics, we aim to develop a unified understanding of movement across scales and species.",
      "Ultimately, this work provides an important foundation for understanding how the nervous and musculoskeletal systems function together in health, how their interactions change in disease, and how these changes contribute to motor impairments and opportunities for therapeutic intervention."
    ],
    /* several slides rotate in the header; "fit": "contain" keeps wide videos uncropped */
    media: [
      { video: "assets/video/musbiomaus-mimic.mp4", poster: "assets/video/musbiomaus-mimic.jpg", alt: "MusBioMaus re-enacting a mouse reach, pull and return", caption: "MusBioMaus re-enacts a mouse's reach, pull and return", link: "https://www.mausspaun.org/" },
      { video: "assets/video/cebra-s1m1.mp4", poster: "assets/video/cebra-s1m1.jpg", fit: "contain", alt: "CEBRA embeddings of S1 and M1 activity in mice during a joystick reach-and-pull task, alongside hand position and joystick traces", caption: "cebra.ai", link: "https://cebra.ai" }
    ],
    projects: [
      { name: "MusBioMaus", pub: "Neuro-musculoskeletal modeling", tag: "From brain to muscle: a neuro-musculoskeletal model of the mouse.", video: "assets/video/musbiomaus-mimic.mp4", poster: "assets/video/musbiomaus-mimic.jpg", links: [["MusBioMaus", "https://www.mausspaun.org/"]] },
      { name: "Primate imitation learning", pub: "Closed-loop imitation learning", tag: "Closed-loop imitation learning reveals muscle-centric and latent-goal codes in primate sensorimotor cortex." },
      { name: "DeepDraw", pub: "Contrasting action and posture coding", tag: "Deep network models of proprioception in the human arm." },
      { name: "FMPose3D", pub: "FMPose3D", tag: "Plausible 3D poses from a single camera, for humans and animals.", links: [["Project page", "https://xiu-cs.github.io/FMPose3D/"]] }
    ]
  },
  neuro: {
    name: "Neural dynamics", accent: "violet",
    title: "Uncover how the brain controls the body and adapts",
    lede: "How brains build and update internal models during skilled motor learning, studied with large-scale recordings and consistent latent embeddings of neural and behavioral data.",
    media: { img: "assets/img/media/cebra-sphere.webp", alt: "A CEBRA latent embedding of neural data" },
    projects: [
      { name: "CEBRA", pub: "Learnable latent embeddings", tag: "Consistent latent embeddings of neural and behavioral data.", video: "assets/video/cebra-allen.mp4", poster: "assets/video/cebra-allen-poster.jpg", links: [["cebra.ai", "https://cebra.ai"]] },
      { name: "DYSCO", pub: "Extracting Governing Equations", tag: "The equations of motor cortex, learned from spikes." },
      { name: "Active sensing", pub: "Visual uncertainty and task demands", tag: "Mice actively seek better views to make visual decisions." },
      { name: "Brain dynamics in schizophrenia", pub: "An explainable AI latent space", tag: "An explainable latent space of brain dynamics reveals a cerebello-prefrontal signature of symptoms." },
      { name: "SCENE", pub: "The Simons Collaboration on Ecological Neuroscience", tag: "Studying how the brain interacts with the world.", links: [["project-scene.org", "https://www.project-scene.org"]] }
    ]
  },
  ml: {
    name: "Machine learning", accent: "magenta",
    title: "Make representations consistent, robust and causal",
    lede: "Identifiable representations, governing equations recovered from latent dynamics, attribution you can trust, and models that hold up under adversarial and out-of-distribution inputs.",
    media: { video: "assets/video/dysco-duffing.mp4", poster: "assets/video/dysco-duffing.jpg", fit: "contain", bg: "#fff", alt: "DYSCO recovering the Duffing equation from data" },
    projects: [
      { name: "DYSCO", pub: "Extracting Governing Equations", tag: "Governing equations, recovered from latent dynamics with multi-view contrastive learning.", video: "assets/video/dysco.mp4", poster: "assets/video/dysco-poster.jpg" },
      { name: "PSI", pub: "Programmable Semantic Interventions", tag: "Finds where a frozen language model carries a named variable, without labels." },
      { name: "AROS", pub: "Adversarially Robust Out-of-Distribution", tag: "Out-of-distribution detection that holds up under adversarial attack." },
      { name: "DISTIL", pub: "DISTIL", tag: "Data-free inversion of trojan triggers via latent diffusion." },
      { name: "Time-series attribution", pub: "Time-series attribution maps", tag: "Attribution maps for time-series models, with regularized contrastive learning." }
    ]
  }
};
