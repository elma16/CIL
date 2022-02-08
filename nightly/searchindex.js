Search.setIndex({docnames:["developer_guide","framework","index","io","optimisation","plugins","processors","recon","utilities"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,"sphinxcontrib.bibtex":9,sphinx:56},filenames:["developer_guide.rst","framework.rst","index.rst","io.rst","optimisation.rst","plugins.rst","processors.rst","recon.rst","utilities.rst"],objects:{"cil.framework":{AcquisitionData:[1,0,1,""],AcquisitionGeometry:[1,0,1,""],BlockDataContainer:[4,0,1,""],BlockGeometry:[1,0,1,""],DataContainer:[1,0,1,""],DataProcessor:[1,0,1,""],ImageData:[1,0,1,""],ImageGeometry:[1,0,1,""],VectorData:[1,0,1,""],VectorGeometry:[1,0,1,""]},"cil.framework.AcquisitionData":{get_slice:[1,1,1,""],subset:[1,1,1,""]},"cil.framework.AcquisitionGeometry":{allocate:[1,1,1,""],clone:[1,1,1,""],copy:[1,1,1,""],create_Cone2D:[1,1,1,""],create_Cone3D:[1,1,1,""],create_Parallel2D:[1,1,1,""],create_Parallel3D:[1,1,1,""],get_ImageGeometry:[1,1,1,""],get_centre_slice:[1,1,1,""],get_slice:[1,1,1,""],set_angles:[1,1,1,""],set_channels:[1,1,1,""],set_labels:[1,1,1,""],set_panel:[1,1,1,""],subset:[1,1,1,""]},"cil.framework.BlockDataContainer":{__iadd__:[4,1,1,""],__idiv__:[4,1,1,""],__imul__:[4,1,1,""],__isub__:[4,1,1,""],__iter__:[4,1,1,""],__itruediv__:[4,1,1,""],__neg__:[4,1,1,""],__radd__:[4,1,1,""],__rdiv__:[4,1,1,""],__rmul__:[4,1,1,""],__rpow__:[4,1,1,""],__rsub__:[4,1,1,""],__rtruediv__:[4,1,1,""],__weakref__:[4,2,1,""],add:[4,1,1,""],axpby:[4,1,1,""],binary_operations:[4,1,1,""],copy:[4,1,1,""],divide:[4,1,1,""],is_compatible:[4,1,1,""],maximum:[4,1,1,""],minimum:[4,1,1,""],multiply:[4,1,1,""],next:[4,1,1,""],power:[4,1,1,""],sapyb:[4,1,1,""],subtract:[4,1,1,""],unary_operations:[4,1,1,""]},"cil.framework.BlockGeometry":{__weakref__:[1,2,1,""],allocate:[1,1,1,""],get_item:[1,1,1,""]},"cil.framework.DataContainer":{__eq__:[1,1,1,""],__ge__:[1,1,1,""],__gt__:[1,1,1,""],__init__:[1,1,1,""],__le__:[1,1,1,""],__lt__:[1,1,1,""],__ne__:[1,1,1,""],__neg__:[1,1,1,""],__str__:[1,1,1,""],__weakref__:[1,2,1,""],_axpby:[1,1,1,""],as_array:[1,1,1,""],axpby:[1,1,1,""],clone:[1,1,1,""],copy:[1,1,1,""],dot:[1,1,1,""],dtype:[1,1,1,""],exp:[1,1,1,""],fill:[1,1,1,""],get_data_axes_order:[1,1,1,""],get_slice:[1,1,1,""],log:[1,1,1,""],max:[1,1,1,""],mean:[1,1,1,""],min:[1,1,1,""],norm:[1,1,1,""],number_of_dimensions:[1,1,1,""],reorder:[1,1,1,""],sapyb:[1,1,1,""],shape:[1,1,1,""],size:[1,1,1,""],squared_norm:[1,1,1,""],subset:[1,1,1,""]},"cil.framework.ImageData":{get_slice:[1,1,1,""],subset:[1,1,1,""]},"cil.framework.ImageGeometry":{allocate:[1,1,1,""],clone:[1,1,1,""],copy:[1,1,1,""],get_slice:[1,1,1,""],subset:[1,1,1,""]},"cil.framework.VectorGeometry":{allocate:[1,1,1,""],clone:[1,1,1,""],copy:[1,1,1,""]},"cil.io":{NEXUSDataReader:[3,0,1,""],NEXUSDataWriter:[3,0,1,""],NikonDataReader:[3,0,1,""],TIFFStackReader:[3,0,1,""],TIFFWriter:[3,0,1,""],TXRMDataReader:[3,0,1,""]},"cil.io.NEXUSDataReader":{__init__:[3,1,1,""],__weakref__:[3,2,1,""],get_data_offset:[3,1,1,""],get_data_scale:[3,1,1,""],get_geometry:[3,1,1,""],load_data:[3,1,1,""],read:[3,1,1,""],read_as_original:[3,1,1,""]},"cil.io.NEXUSDataWriter":{__init__:[3,1,1,""],__weakref__:[3,2,1,""],set_up:[3,1,1,""],write:[3,1,1,""]},"cil.io.NikonDataReader":{__init__:[3,1,1,""],__weakref__:[3,2,1,""],get_geometry:[3,1,1,""],get_roi:[3,1,1,""],load_projections:[3,1,1,""],read:[3,1,1,""]},"cil.io.TIFFStackReader":{__init__:[3,1,1,""],__weakref__:[3,2,1,""],read:[3,1,1,""],read_as_AcquisitionData:[3,1,1,""],read_as_ImageData:[3,1,1,""],set_up:[3,1,1,""]},"cil.io.TIFFWriter":{__init__:[3,1,1,""],__weakref__:[3,2,1,""]},"cil.io.TXRMDataReader":{__init__:[3,1,1,""],__weakref__:[3,2,1,""],get_geometry:[3,1,1,""],get_metadata:[3,1,1,""],load_projections:[3,1,1,""],read:[3,1,1,""],set_up:[3,1,1,""]},"cil.optimisation.algorithms":{Algorithm:[4,0,1,""],CGLS:[4,0,1,""],FISTA:[4,0,1,""],GD:[4,0,1,""],LADMM:[4,0,1,""],PDHG:[4,0,1,""],SIRT:[4,0,1,""],SPDHG:[4,0,1,""]},"cil.optimisation.algorithms.Algorithm":{__init__:[4,1,1,""],__iter__:[4,1,1,""],__next__:[4,1,1,""],__set_up_logger:[4,1,1,""],__weakref__:[4,2,1,""],get_last_loss:[4,1,1,""],get_last_objective:[4,1,1,""],get_output:[4,1,1,""],iterations:[4,1,1,""],loss:[4,1,1,""],max_iteration:[4,1,1,""],max_iteration_stop_cryterion:[4,1,1,""],next:[4,1,1,""],objective:[4,1,1,""],run:[4,1,1,""],set_up:[4,1,1,""],should_stop:[4,1,1,""],update:[4,1,1,""],update_objective:[4,1,1,""],update_previous_solution:[4,1,1,""],verbose_output:[4,1,1,""]},"cil.optimisation.algorithms.CGLS":{flag:[4,1,1,""],set_up:[4,1,1,""],should_stop:[4,1,1,""],update:[4,1,1,""],update_objective:[4,1,1,""]},"cil.optimisation.algorithms.FISTA":{__init__:[4,1,1,""],set_up:[4,1,1,""],update:[4,1,1,""],update_objective:[4,1,1,""]},"cil.optimisation.algorithms.GD":{armijo_rule:[4,1,1,""],set_up:[4,1,1,""],should_stop:[4,1,1,""],update:[4,1,1,""],update_objective:[4,1,1,""]},"cil.optimisation.algorithms.LADMM":{set_up:[4,1,1,""],update:[4,1,1,""],update_objective:[4,1,1,""]},"cil.optimisation.algorithms.PDHG":{set_step_sizes:[4,1,1,""],update:[4,1,1,""],update_objective:[4,1,1,""],update_step_sizes:[4,1,1,""]},"cil.optimisation.algorithms.SIRT":{set_up:[4,1,1,""],update:[4,1,1,""],update_objective:[4,1,1,""]},"cil.optimisation.algorithms.SPDHG":{objective:[4,1,1,""],set_up:[4,1,1,""],update:[4,1,1,""],update_objective:[4,1,1,""]},"cil.optimisation.functions":{BlockFunction:[4,0,1,""],ConstantFunction:[4,0,1,""],Function:[4,0,1,""],IndicatorBox:[4,0,1,""],KullbackLeibler:[4,0,1,""],L1Norm:[4,0,1,""],L2NormSquared:[4,0,1,""],LeastSquares:[4,0,1,""],MixedL21Norm:[4,0,1,""],OperatorCompositionFunction:[4,0,1,""],Rosenbrock:[4,0,1,""],ScaledFunction:[4,0,1,""],SmoothMixedL21Norm:[4,0,1,""],SumFunction:[4,0,1,""],SumScalarFunction:[4,0,1,""],TotalVariation:[4,0,1,""],TranslateFunction:[4,0,1,""],WeightedL2NormSquared:[4,0,1,""],ZeroFunction:[4,0,1,""]},"cil.optimisation.functions.BlockFunction":{L:[4,1,1,""],__call__:[4,1,1,""],__init__:[4,1,1,""],__rmul__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],proximal:[4,1,1,""],proximal_conjugate:[4,1,1,""]},"cil.optimisation.functions.ConstantFunction":{L:[4,1,1,""],__call__:[4,1,1,""],__init__:[4,1,1,""],__rmul__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],proximal:[4,1,1,""]},"cil.optimisation.functions.Function":{L:[4,1,1,""],__add__:[4,1,1,""],__call__:[4,1,1,""],__init__:[4,1,1,""],__radd__:[4,1,1,""],__rmul__:[4,1,1,""],__sub__:[4,1,1,""],__weakref__:[4,2,1,""],centered_at:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],proximal:[4,1,1,""],proximal_conjugate:[4,1,1,""]},"cil.optimisation.functions.IndicatorBox":{__call__:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],proximal:[4,1,1,""],proximal_conjugate:[4,1,1,""]},"cil.optimisation.functions.KullbackLeibler":{__call__:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],log:[4,1,1,""],proximal:[4,1,1,""],proximal_conjugate:[4,1,1,""]},"cil.optimisation.functions.L1Norm":{__call__:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],proximal:[4,1,1,""]},"cil.optimisation.functions.L2NormSquared":{__call__:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],proximal:[4,1,1,""]},"cil.optimisation.functions.LeastSquares":{L:[4,1,1,""],__call__:[4,1,1,""],__init__:[4,1,1,""],__rmul__:[4,1,1,""],gradient:[4,1,1,""]},"cil.optimisation.functions.MixedL21Norm":{__call__:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],proximal:[4,1,1,""]},"cil.optimisation.functions.OperatorCompositionFunction":{L:[4,1,1,""],__call__:[4,1,1,""],__init__:[4,1,1,""],gradient:[4,1,1,""]},"cil.optimisation.functions.Rosenbrock":{__call__:[4,1,1,""],__init__:[4,1,1,""],gradient:[4,1,1,""]},"cil.optimisation.functions.ScaledFunction":{L:[4,1,1,""],__call__:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],proximal:[4,1,1,""],proximal_conjugate:[4,1,1,""]},"cil.optimisation.functions.SmoothMixedL21Norm":{__call__:[4,1,1,""],__init__:[4,1,1,""],gradient:[4,1,1,""]},"cil.optimisation.functions.SumFunction":{L:[4,1,1,""],__call__:[4,1,1,""],__init__:[4,1,1,""],gradient:[4,1,1,""]},"cil.optimisation.functions.SumScalarFunction":{L:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],proximal:[4,1,1,""]},"cil.optimisation.functions.TotalVariation":{L:[4,1,1,""],__call__:[4,1,1,""],__init__:[4,1,1,""],__rmul__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],projection_C:[4,1,1,""],projection_P:[4,1,1,""],proximal:[4,1,1,""]},"cil.optimisation.functions.TranslateFunction":{__call__:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],proximal:[4,1,1,""]},"cil.optimisation.functions.WeightedL2NormSquared":{__call__:[4,1,1,""],__init__:[4,1,1,""],convex_conjugate:[4,1,1,""],gradient:[4,1,1,""],proximal:[4,1,1,""]},"cil.optimisation.functions.ZeroFunction":{__init__:[4,1,1,""]},"cil.optimisation.operators":{BlockOperator:[4,0,1,""],ChannelwiseOperator:[4,0,1,""],CompositionOperator:[4,0,1,""],DiagonalOperator:[4,0,1,""],FiniteDifferenceOperator:[4,0,1,""],GradientOperator:[4,0,1,""],IdentityOperator:[4,0,1,""],LinearOperator:[4,0,1,""],MaskOperator:[4,0,1,""],MatrixOperator:[4,0,1,""],Operator:[4,0,1,""],ScaledOperator:[4,0,1,""],SparseFiniteDifferenceOperator:[4,0,1,""],SymmetrisedGradientOperator:[4,0,1,""],ZeroOperator:[4,0,1,""]},"cil.optimisation.operators.BlockOperator":{T:[4,1,1,""],__getitem__:[4,1,1,""],__init__:[4,1,1,""],__rmul__:[4,1,1,""],adjoint:[4,1,1,""],column_wise_compatible:[4,1,1,""],direct:[4,1,1,""],domain_geometry:[4,1,1,""],get_item:[4,1,1,""],get_output_shape:[4,1,1,""],is_linear:[4,1,1,""],norm:[4,1,1,""],range_geometry:[4,1,1,""],row_wise_compatible:[4,1,1,""]},"cil.optimisation.operators.ChannelwiseOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],calculate_norm:[4,1,1,""],direct:[4,1,1,""]},"cil.optimisation.operators.CompositionOperator":{__init__:[4,1,1,""],direct:[4,1,1,""],is_linear:[4,1,1,""]},"cil.optimisation.operators.DiagonalOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],calculate_norm:[4,1,1,""],direct:[4,1,1,""]},"cil.optimisation.operators.FiniteDifferenceOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],direct:[4,1,1,""]},"cil.optimisation.operators.GradientOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],direct:[4,1,1,""]},"cil.optimisation.operators.IdentityOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],calculate_norm:[4,1,1,""],direct:[4,1,1,""]},"cil.optimisation.operators.LinearOperator":{PowerMethod:[4,1,1,""],__init__:[4,1,1,""],adjoint:[4,1,1,""],calculate_norm:[4,1,1,""],dot_test:[4,1,1,""],is_linear:[4,1,1,""]},"cil.optimisation.operators.MaskOperator":{__init__:[4,1,1,""]},"cil.optimisation.operators.MatrixOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],direct:[4,1,1,""]},"cil.optimisation.operators.Operator":{__init__:[4,1,1,""],__neg__:[4,1,1,""],__rmul__:[4,1,1,""],__sub__:[4,1,1,""],__weakref__:[4,2,1,""],calculate_norm:[4,1,1,""],direct:[4,1,1,""],domain_geometry:[4,1,1,""],is_linear:[4,1,1,""],norm:[4,1,1,""],range_geometry:[4,1,1,""],set_norm:[4,1,1,""]},"cil.optimisation.operators.ScaledOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],direct:[4,1,1,""],is_linear:[4,1,1,""],norm:[4,1,1,""]},"cil.optimisation.operators.SparseFiniteDifferenceOperator":{__init__:[4,1,1,""],direct:[4,1,1,""]},"cil.optimisation.operators.SymmetrisedGradientOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],direct:[4,1,1,""]},"cil.optimisation.operators.ZeroOperator":{__init__:[4,1,1,""],adjoint:[4,1,1,""],calculate_norm:[4,1,1,""],direct:[4,1,1,""]},"cil.plugins.TomoPhantom":{get_ImageData:[5,3,1,""]},"cil.plugins.astra":{FBP:[5,0,1,""],ProjectionOperator:[5,0,1,""]},"cil.plugins.astra.FBP":{get_output:[5,1,1,""],set_input:[5,1,1,""]},"cil.plugins.astra.ProjectionOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],calculate_norm:[5,1,1,""],direct:[5,1,1,""],domain_geometry:[5,1,1,""],range_geometry:[5,1,1,""]},"cil.plugins.ccpi_regularisation.functions":{FGP_TV:[5,0,1,""],FGP_dTV:[5,0,1,""],TGV:[5,0,1,""],TNV:[5,0,1,""]},"cil.plugins.ccpi_regularisation.functions.FGP_TV":{__init__:[5,1,1,""],__rmul__:[5,1,1,""]},"cil.plugins.ccpi_regularisation.functions.FGP_dTV":{__call__:[5,1,1,""],__init__:[5,1,1,""],__rmul__:[5,1,1,""],convex_conjugate:[5,1,1,""]},"cil.plugins.ccpi_regularisation.functions.TGV":{__call__:[5,1,1,""],__init__:[5,1,1,""],__rmul__:[5,1,1,""],convex_conjugate:[5,1,1,""]},"cil.plugins.ccpi_regularisation.functions.TNV":{__call__:[5,1,1,""],__init__:[5,1,1,""],__rmul__:[5,1,1,""],check_input:[5,1,1,""],convex_conjugate:[5,1,1,""]},"cil.plugins.tigre":{FBP:[5,0,1,""],ProjectionOperator:[5,0,1,""]},"cil.plugins.tigre.FBP":{get_output:[5,1,1,""],set_input:[5,1,1,""]},"cil.plugins.tigre.ProjectionOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],direct:[5,1,1,""],domain_geometry:[5,1,1,""],range_geometry:[5,1,1,""]},"cil.processors":{AbsorptionTransmissionConverter:[6,0,1,""],Binner:[6,0,1,""],CentreOfRotationCorrector:[6,0,1,""],MaskGenerator:[6,0,1,""],Masker:[6,0,1,""],Normaliser:[6,0,1,""],Padder:[6,0,1,""],RingRemover:[6,0,1,""],Slicer:[6,0,1,""],TransmissionAbsorptionConverter:[6,0,1,""]},"cil.processors.AbsorptionTransmissionConverter":{get_output:[6,1,1,""],set_input:[6,1,1,""]},"cil.processors.Binner":{get_output:[6,1,1,""],set_input:[6,1,1,""]},"cil.processors.CentreOfRotationCorrector":{__weakref__:[1,2,1,""],image_sharpness:[6,1,1,""],xcorr:[6,1,1,""],xcorrelation:[6,1,1,""]},"cil.processors.MaskGenerator":{get_output:[6,1,1,""],mean:[6,1,1,""],median:[6,1,1,""],quantile:[6,1,1,""],set_input:[6,1,1,""],special_values:[6,1,1,""],threshold:[6,1,1,""]},"cil.processors.Masker":{get_output:[6,1,1,""],interpolate:[6,1,1,""],mean:[6,1,1,""],median:[6,1,1,""],set_input:[6,1,1,""],value:[6,1,1,""]},"cil.processors.Normaliser":{estimate_normalised_error:[6,1,1,""],get_output:[6,1,1,""],set_input:[6,1,1,""]},"cil.processors.Padder":{constant:[6,1,1,""],edge:[6,1,1,""],get_output:[6,1,1,""],linear_ramp:[6,1,1,""],reflect:[6,1,1,""],set_input:[6,1,1,""],symmetric:[6,1,1,""],wrap:[6,1,1,""]},"cil.processors.RingRemover":{get_output:[6,1,1,""],set_input:[6,1,1,""],xRemoveStripesVertical:[6,1,1,""]},"cil.processors.Slicer":{get_output:[6,1,1,""],set_input:[6,1,1,""]},"cil.processors.TransmissionAbsorptionConverter":{get_output:[6,1,1,""],set_input:[6,1,1,""]},"cil.recon":{FBP:[7,0,1,""],FDK:[7,0,1,""]},"cil.recon.FBP":{get_filter_array:[7,1,1,""],reset:[7,1,1,""],run:[7,1,1,""],set_backend:[7,1,1,""],set_fft_order:[7,1,1,""],set_filter:[7,1,1,""],set_filter_inplace:[7,1,1,""],set_image_geometry:[7,1,1,""],set_input:[7,1,1,""],set_split_processing:[7,1,1,""]},"cil.recon.FDK":{get_filter_array:[7,1,1,""],reset:[7,1,1,""],run:[7,1,1,""],set_backend:[7,1,1,""],set_fft_order:[7,1,1,""],set_filter:[7,1,1,""],set_filter_inplace:[7,1,1,""],set_image_geometry:[7,1,1,""],set_input:[7,1,1,""]},"cil.utilities":{quality_measures:[8,4,0,"-"]},"cil.utilities.dataexample":{SIMULATED_CONE_BEAM_DATA:[8,0,1,"id0"],SIMULATED_PARALLEL_BEAM_DATA:[8,0,1,""],SYNCHROTRON_PARALLEL_BEAM_DATA:[8,0,1,""],TestData:[8,0,1,""]},"cil.utilities.dataexample.SIMULATED_CONE_BEAM_DATA":{get:[8,1,1,"id1"]},"cil.utilities.dataexample.SIMULATED_PARALLEL_BEAM_DATA":{get:[8,1,1,""]},"cil.utilities.dataexample.SYNCHROTRON_PARALLEL_BEAM_DATA":{get:[8,1,1,""]},"cil.utilities.dataexample.TestData":{load:[8,1,1,""],random_noise:[8,1,1,""],scikit_random_noise:[8,1,1,""]},"cil.utilities.display":{show2D:[8,0,1,""],show_geometry:[8,0,1,""]},"cil.utilities.display.show2D":{save:[8,1,1,""]},"cil.utilities.display.show_geometry":{save:[8,1,1,""]},"cil.utilities.jupyter":{islicer:[8,0,1,""],link_islicer:[8,0,1,""]},"cil.utilities.quality_measures":{mae:[8,3,1,""],mse:[8,3,1,""],psnr:[8,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:function","4":"py:module"},terms:{"0000654846240296":4,"0005647295658866":4,"001":[1,6],"003":5,"005":[1,6],"008567":6,"010":4,"018":4,"0192":4,"0193":4,"0251":4,"025129":5,"055010":5,"09076934x":4,"100":[1,3,4,5],"1007":4,"1015":4,"1016":5,"1046":4,"1088":5,"1098":4,"1102995080":4,"1109":4,"1137":4,"120":4,"128":[1,5,6],"1321":4,"1364":[5,6],"145":4,"16bit":3,"180":[1,6],"180degre":[1,6],"183":4,"1976":5,"200":[1,3,6],"2009":4,"2010":4,"2011":4,"2018":[4,5],"2019":[4,5,8],"202":4,"2020":4,"20200192":4,"20200193":4,"2021":4,"2028250":4,"2057":5,"20channel":4,"2204":4,"2419":4,"2434":4,"255":8,"256":1,"2783":4,"2808":4,"2_2":[1,4],"2beta":4,"2ca":4,"2s1":4,"300":[1,3],"360":5,"379":4,"abstract":4,"boolean":[1,4,5,6,8],"case":[1,4,8],"class":[1,2,3,5,6,7,8],"default":[1,3,4,5,6,7,8],"float":[1,4,5,6,8],"function":[2,6,8],"import":[1,3,4,6],"int":[1,3,4,5,6,7,8],"long":[1,4],"new":[1,4,6],"return":[1,3,4,5,6,7,8],"richt\u00e1rik":4,"sch\u00f6nlieb":4,"static":[1,4,6,8],"true":[1,3,4,5,6,7,8],"try":1,"var":8,"while":[2,4],AND:8,ARE:8,BUT:8,DLS:8,FOR:8,For:[1,3,4,6,8],NOT:8,One:[6,8],SUCH:8,THE:8,The:[0,1,2,3,4,5,6,7,8],Then:4,There:[1,4],These:[1,6],USE:8,Use:8,Used:8,Will:[1,8],With:1,__add__:4,__array_priority__:[1,4],__call__:[4,5],__eq__:1,__ge__:1,__getitem__:4,__gt__:1,__iadd__:[1,4],__idiv__:[1,4],__imul__:[1,4],__init__:[1,3,4,5],__isub__:[1,4],__iter__:[1,4],__itruediv__:[1,4],__le__:1,__lt__:1,__mul__:[1,4],__ne__:1,__neg__:[1,4],__next__:4,__radd__:[1,4],__rdiv__:[1,4],__rmul__:[1,4,5],__rpow__:[1,4],__rsub__:[1,4],__rtruediv__:[1,4],__set_up_logg:4,__str__:1,__sub__:4,__weakref__:[1,3,4],_as_gen:8,_axpbi:1,_domain:4,abl:[1,4,5],about:[1,3],abov:[1,4,8],abs:[1,4,6],absolut:[4,6,8],absorpt:2,absorptiontransmissionconvert:6,abspath:3,acceler:4,accept:[1,4],access:4,accord:1,accordingli:4,accross:5,accur:[4,5,7],accuraci:[1,6],achiev:[1,4],acquir:[1,4],acquisiiondata:1,acquisit:[1,2,3,4,7,8],acquisition_geometri:[3,5,8],acquisitiondata:[2,4,6,7,8],acquisitiondatasetn:6,acquisitiongeomerti:1,acquisitiongeometri:[1,3,4,5,6,8],acquisitionmodel:4,acquisitongeometri:2,across:6,act:4,actor:1,actual:[1,4],ad1:3,ad_par:1,adapt:8,add:[1,4,5,8],addit:[1,4,7,8],adjoint:[4,5],adjoint_weight:5,adjust:3,admm:4,advanc:[1,4],advis:8,after:[4,6,8],ag1:3,ag_fan:1,ag_fan_mc:1,ag_par:1,ag_par_3d:1,against:8,aim:[1,2],algebr:[1,4],algebra:[1,4],algorithm:[1,2,5,6,7],alia:[1,3,4,6,8],align:[1,4],all:[1,3,4,5,6,7,8],alloc:[1,4,7],allow:[1,4,5,6,7],alon:8,along:[1,3,4,6,8],alpha:[1,4,5],alphabet:3,also:[1,2,3,4],altern:4,although:4,alwai:4,ametova:4,amount:[1,8],analyt:[2,4],ang_tol:[1,6],angl:[1,3,5],anglar:5,angle_unit:[1,3,5],anglular:5,angular:[1,6],ani:[1,4,8],anisotrop:[4,5],anoth:[1,4],antonin:4,apart:[1,6],api:8,append:4,appli:[1,3,4,6,7,8],applic:[4,5,6],appropri:[1,4],approx:4,approximatli:5,aquisition_geometri:5,arbitrari:4,area:7,arg:[1,4,8],argmin:[1,4],argument:[1,4,8],aris:8,armijo:4,armijo_rul:4,arrai:[1,3,4,6,7,8],arrang:[1,3],articl:5,artifact:1,arxiv:4,as_arrai:1,ascent:4,aspect:8,assembl:1,assign:6,assum:[4,8],astra:[1,2,6],asymmetr:6,attribut:1,augment:4,author:8,automat:[1,6],avail:[4,5],averag:3,avoid:[4,6],axes:[1,3],axi:[1,3,6,8],axis_0:3,axis_1:3,axis_2:3,axis_label:8,axpbi:[1,4],azimuth:8,back:[1,5,7,8],backend:[4,7],backproject:4,backward:[1,3,4,5,7],bar:4,bare:1,base:[1,2,6,7,8],basic:[1,2,3,4],bdc1:[1,4],bdc2:[1,4],bdc:1,beam:[2,5,6,8],becaus:[4,8],beck:4,been:[1,4,5,6],beer:6,befor:[3,6,8],begin:[1,4,6],behav:[1,4],behaviour:4,being:2,below:[1,4,6],beta:4,better:[1,4],between:[1,4,5,6],beyond:[1,8],bibian:4,big:4,bigg:4,bin:[1,3,6],binari:[1,8],binary_oper:[1,4],binner:2,binom:1,biologi:4,bit:3,blob:[4,8],block:2,blockdatacontain:[1,2,8],blockfunct:[1,4],blockgeometri:[1,4],blockoper:[1,4],bmatrix:4,bnd_cond:4,boat:8,bool:[3,4,6,8],boolian:[7,8],border:1,both:[1,2,4,6],bother:1,bottom:1,bound:4,boundari:[4,6],box:2,broadcast:5,build:4,burca:4,busi:8,cach:4,calcul:[2,3,4,5,6,8],calculate_norm:[4,5],call:[1,4,7],callback:4,camera:8,can:[1,2,3,4,5,6,7,8],cannot:8,capabl:5,care:8,carola:4,caus:[1,8],ccpi:[2,3],ccpi_regularis:5,ccppetmr:4,cdot:4,ceil:4,center:[2,4,8],center_i:1,center_x:1,center_z:1,centered_at:4,centr:[1,2,8],centreofrotationcorrector:[1,6],cern:5,certain:4,cgl:[1,4],chambol:4,chan:4,chanel:1,chang:[3,4,5,8],channel:[2,4,5],channel_label:1,channelwiseoper:4,characterist:1,check:[1,3,4],check_converg:4,check_input:5,chunk:7,cil:[1,3,4,6,7,8],cilacc:1,circular:[1,5],clair:4,classmethod:8,classstir_1_1poissonloglikelihoodwithlinearmodelformean:4,clip:8,clone:[1,4],close:4,cmap:8,code:[0,1,4,5,6,8],coincid:1,col:4,collect:[2,4],collim:1,color:8,colorbar:8,colour:8,column:[1,3,4,8],column_wise_compat:4,com:[4,5,8],common:1,commut:[1,4],compar:8,comparison:[4,8],compat:[1,3,4,7],complex:[1,4],compon:[1,4,7],composit:2,compositionoper:4,compress:3,compris:1,comput:[4,7],computation:4,concret:4,condit:[4,8],cone:[2,5,6,8],configur:[1,4,5,6,7],conjug:[1,4,5],consecut:4,consequenti:8,consid:[1,4],consist:[1,4],constant:[1,4,5,6],constant_valu:6,constantfunct:4,constrain:4,constraint:[4,5],construct:[2,4],constructor:[3,4],contain:[1,3,4,6,7,8],content:[3,4],continu:4,contol:7,contract:8,contribut:[0,1,4],contributor:8,control:4,contruct:6,convent:[1,4],converg:4,convert:[2,8],convex:[4,5],convex_conjug:[4,5],copi:[1,4],copyright:8,core:[0,1,4],correct:[2,4],correl:[1,4,6],correlation_spac:4,correspond:[1,3,4,6],corrupt:8,costli:4,could:[1,4],counter_offset:3,cours:1,courtesi:4,cpu:[1,4,5],creat:[1,4,5,6,7,8],create_cone2d:[1,5],create_cone3d:[1,5],create_parallel2d:1,create_parallel3d:1,creation:4,creator:[4,5],critera:[1,6],criterion:[4,5],cross:[1,6],cryterion:4,cubic:6,current:[1,4,7],custom:[4,7],customis:[5,7],damag:8,dark:6,dark_field:6,data:[2,3,4,5,7],data_contain:3,data_dir:8,data_profil:1,data_rang:8,data_subset:1,data_transpos:1,datacontain:[2,3,4,5,6,8],datacontainer0:1,datacontainer1:1,dataexampl:8,dataprocessor:2,dataset:[1,2,3,5,6,7],datatyp:4,date:2,dc1:8,dc2:8,deblur:4,decnum:6,decompos:4,deep_copi:1,def:4,defin:[1,2,3,4,5,6,8],definit:[1,4],degre:[1,3,5,6,8],delplanck:4,delta:4,delta_dark:6,delta_flat:6,demo:[1,2,4],denois:4,denot:4,depend:[1,3,6],depict:1,deprec:[1,4,6],deprecated_arg:4,deriv:[4,8],descent:4,describ:[1,3,4,5],descript:[1,5,7],design:4,desir:[1,4,6],desiri:6,detail:4,detect:6,detector:[1,3,7],detector_direction_i:1,detector_direction_x:1,detector_i:1,detector_posit:1,detector_x:1,determin:[5,6],devaiat:6,devel:2,develop:[1,2,4],deviat:[6,8],devic:5,diag:4,diagon:4,diagonaloper:4,diamond:2,dict:6,dictionari:[1,3,6],differ:[1,2,4,5],differenti:4,dimens:[1,3,4,5,6,8],dimension:4,dimension_label:[1,4,6],direct:[1,3,4,5,8],direct_method:5,direction0:8,direction1:8,directli:[1,4],directori:8,disclaim:8,disk:3,displai:2,dist_center_detector:1,dist_source_cent:1,distanc:[1,4,8],distribut:[4,8],diverg:4,divid:[1,4,6],divis:[1,4,6],doc:[1,3,4,6],docstr:0,document:[4,5,8],doe:[1,4,8],doi:[4,6],domain:[4,5,7,8],domain_geometri:[4,5],domain_init:4,domin:4,done:[1,4],dot:[1,4],dot_test:4,doubl:1,down:8,download:4,downsampl:6,doxi:4,dtype:[1,3,4,5,8],dual:4,dualiti:4,due:[1,4],dure:[1,4],dynam:4,each:[1,4,6,8],earlier:5,easili:4,edg:6,edoardo:4,edu:4,ehrhardt:4,eigenvalu:4,eigenvector:4,either:[1,3,4,6,8],element:[1,3,4,6],elementwis:4,elev:8,els:[4,5],emiss:4,emit:1,emploi:2,empti:1,enabl:2,end:[1,3,4,6],end_valu:6,endors:8,enforc:[2,4,6],engin:[1,4],enough:2,entail:4,epsilon:4,equal:[1,5,8],equival:[1,3,4],erfcinv:6,erni:4,error:[1,3,4,6,8],esser:4,estim:[1,6],estimate_normalised_error:6,eta:[4,5],euclid:4,euclidean:1,evalu:4,evangelo:4,evelina:4,even:[1,4,6,8],event:[4,8],everi:[4,8],everyth:3,everywher:4,exampl:[0,1,2,4,5,7],exclus:[6,8],execut:4,exemplari:8,exist:[1,4],exp:1,expect:1,expens:4,explicit:4,explicitli:8,expon:6,expos:8,express:[1,4,8],extend:[4,8],extract:1,f_1:4,f_i:4,f_n:4,fact:[1,3,4],factor:[1,3,6],factori:[1,6],fail:[1,4],fals:[1,3,4,6,7,8],fan:2,fardel:4,fashion:4,fast:4,faster:4,fbp:[1,2,6],fdk:[2,5],feasibl:1,fft:7,fft_order:7,fgp:4,fgp_dtv:5,fgp_tv:[4,5],fidel:[1,4],field:[1,6],figsiz:8,figur:8,file:[1,3,4],file_nam:3,filenam:8,fill:[1,5,6,7],filter:[1,5,7],find:[1,4,6],fine:[1,6],finit:4,finitedifferenceoper:4,first:[1,3,4,5,6],firstli:[2,4],fista:4,fit:[1,4,6,8],fix:4,fix_rang:8,flag:4,flat:6,flat_field:6,flatten:6,flip:3,fliplr:3,float32:[1,3,4,5],fname:4,folder:3,follow:[0,1,4,6,8],fontsiz:8,forc:[1,4,6],form:[1,4,8],format:[0,1],formul:[2,4],formula:4,forth:4,forward:[4,5],found:[2,4,8],fourier:7,foward:7,frac:[1,4],frame:1,framework:[2,3],frequenc:7,from:[1,2,3,4,5,7],full:[1,3,7],function1:4,function2:4,fundament:4,further:[2,4],futher:[5,7],futur:[1,4],gamma:[4,5],gamma_fconj:4,gamma_g:4,gantri:1,gap:[1,4,6],gaussian:8,gemma:4,gener:[1,2,3,4,5,8],generalis:[4,5],genericlli:[2,4],geom_typ:1,geometr:[1,5],geometri:[2,3,4,5,6],geomrtri:3,geq0:4,get:[3,4,8],get_centre_slic:1,get_data_axes_ord:1,get_data_offset:3,get_data_scal:3,get_filter_arrai:7,get_geometri:3,get_imagedata:5,get_imagegeometri:[1,5],get_item:[1,4],get_last_loss:4,get_last_object:4,get_metadata:3,get_ouput:5,get_output:[4,5,6],get_output_shap:4,get_roi:3,get_slic:1,github:[4,5,8],given:[1,4],global:[4,8],gm_domain:4,gm_rang:4,goal:1,good:8,gpu:5,gradient:[4,5],gradientoper:2,grai:8,greater:[1,7],greatli:1,grid:[1,6,8],ground_truth:8,group:4,guarant:4,guarante:4,guess:4,guid:2,handl:[1,2],happen:1,hardwar:7,has:[1,4,5,6],have:[1,3,4,7],height:8,held:1,help:[4,5],henc:4,here:4,hereof:4,high:[2,4],higher:[7,8],highli:4,hold:[1,4],home:[1,3,4,5,6,7,8],horizont:[1,3,6],horizontal_i:[1,4],horizontal_x:[1,4],hotdog:8,how:4,howev:[3,4,8],html:[0,1,3,4,6,8],http:[1,3,4,5,6,8],hybrid:4,i_0:3,ideal:1,ident:4,identifi:6,identityoper:4,ieee:4,ig3:1,ig_fan:1,ig_par:1,ig_par_3d:1,ignor:[3,5],illustr:1,im_data1:1,im_data2:1,ima:6,imag:[0,1,2,3,4,5,6,7],image_geometri:[3,5,7,8],image_sharp:[1,6],imagedata:[2,4,5,6,7,8],imagegeometri:[2,4,5,6,7,8],implement:[1,2,4],implementatit:4,impli:[4,8],impos:1,inch:8,incid:[1,6],incident:8,includ:[4,6,8],inclus:6,increas:[4,7],increment:6,independ:4,index:[1,2,3,4,6],indic:[1,2,3,7],indicatorbox:4,indipend:[1,4],indirect:8,inequ:4,inf:[4,6],infin:4,infinit:4,influenc:1,info:[4,5,6],inform:[1,2,4],infrastructur:4,infti:4,ingredi:4,inherit:[1,4],initi:[1,3,4,5,6],initial_angl:1,initial_bin:[1,6],initialis:[1,3,4],inlin:[1,4],inner:[1,4],inpaintingand:4,inplac:7,input:[1,2,3,4,5,6,7,8],insid:4,instal:5,instanc:[1,3,4],instanti:[1,4],instead:[4,8],instrument:[1,6],integ:[1,4,5,6,8],intend:4,intens:6,interact:[2,4],interest:6,intermedi:8,intern:1,interpoalt:6,interpol:[5,6],interpret:[4,7],interrupt:8,intersect:5,interv:4,intslid:8,intuit:8,invers:[4,5],iop:5,iopscienc:5,irrespect:4,is_compat:[1,4],is_linear:4,islic:2,isotrop:[4,5],iter:[1,4,5],its:[4,8],itself:[1,4],jakob:4,join:2,journal:4,jupyt:8,just:1,k_i:4,keep:8,kei:1,kept:4,keyward:4,keyword:[1,4],kinemat:1,kl_div:4,kmax:4,know:1,knowledg:1,known:4,kullback:4,kullbackleibl:2,kwarg:[1,3,4,5,8],l1norm:4,l21:2,l2norm_:4,l2normsquar:4,lab:1,label:[1,4,6,8],ladmm:4,lagrangian:4,lak:[5,7],lambert:6,langl:4,languag:5,larg:[1,4],largest:4,last:[4,6],later:4,latter:4,law:6,layout:1,lead:3,least:[1,2],leastsquar:4,left:[1,3,4,8],leibler:4,length:[1,4,7],leq1:4,less:[1,3],let:4,level:[2,3,4],liabil:8,liabl:8,librari:[0,1,3,4],light:2,like:[1,4],limit:[4,8],linear:[4,5,6],linear_ramp:6,linearoper:[4,5],link:[0,2,4],link_islic:2,linspac:[1,5],lionheart:4,lipschitz:4,lipshitz:4,list:[1,2,3,4,8],load:[3,8],load_data:3,load_project:3,loader:1,local:8,local_var:8,localvar:8,locat:[1,6],log0:4,log10:4,log:[1,3,4,6,7],log_fil:4,logarithm:6,logger:4,logging_level:3,loop:[3,4,6],loss:[1,4,8],lossi:3,lost:4,low_val:8,lower:[4,6,8],lvert:4,machin:1,mad:6,mae:8,mag:1,magnif:1,magnitud:4,mai:[1,2,4,7,8],mail:2,main:[1,2,4],mainli:1,maintain:8,make:[1,4],mani:4,manipul:2,manual:8,map:[4,8],markiewicz:4,martin:4,mask:[2,4],masker:6,maskgener:6,maskoper:4,master:[4,8],match:[1,4,5],materi:8,math:[1,4],mathbb:4,mathcal:4,mathemat:[2,4],mathrm:[1,4],matplotlib:8,matric:4,matrix:[1,4,8],matrixoper:4,matthia:4,max:[1,4,5,8],max_:4,max_iter:[4,5],max_iteration_stop_cryterion:4,max_quantil:6,max_val:6,max_valu:1,maximis:[1,6],maximum:[1,4],mbox:4,mean:[1,4,6,8],meaning:6,meant:1,measur:[1,4,6],meausur:1,median:6,medicin:4,medium:4,member:4,memori:[1,4,7],merchant:8,messag:3,met:[4,8],meta:1,metadata:[1,2,3],method:[1,4,5,6,7],metric:2,midlin:1,might:4,min:[1,4,8],min_:4,min_intens:6,min_quantil:6,min_val:6,min_x:4,minim:4,minimis:4,minimum:[1,4,5],minmax:8,mirror:6,misalign:1,miss:6,mix:2,mixedl21norm:4,mode:[3,6,8],model:5,modif:8,modifi:7,modul:[1,4,5,6,7],moment:4,monitor:4,mop:4,mop_norm:4,more:[1,3,4,7,8],moreau:4,most:4,mse:8,multi:[2,4],multichannel:4,multipl:[1,4,5,6,8],multipli:[1,4,6],must:[1,4,7,8],mx1:4,my_data:3,n_angl:1,nabla:4,name:[1,3,4,8],nan:[4,6],ndarrai:[1,4,6,7,8],ndim:5,nearest:6,need:[4,6,8],neg:[1,3,4,5,6,7,8],negat:1,neglig:8,neither:8,nest:[1,4],net:4,neumann:4,neutron:6,new_ord:1,newlin:4,next:[1,4,6,8],nexu:[1,2],nexus_fil:3,nexusdataread:3,nexusdatawrit:3,nice:4,nikon:[1,2],nikondataread:3,nois:[4,8],noisy_data:4,non:[2,4,5],none:[1,3,4,5,6,7,8],nonneg:5,nor:8,norm2sq:4,norm:[1,2,5],normal:[1,4],normalis:[2,3],notat:4,note:[1,3,4,6,7,8],notebook:1,notic:[3,4,8],nov:4,now:1,num_channel:1,num_col:8,num_model:5,num_pixel:1,num_pixels_h:1,num_pixels_v:1,num_thread:[1,4],number:[1,2,3,4,5,6,8],number_of_dimens:1,numer:1,numpi:[1,3,4,6,7,8],numpydoc:0,nx1:4,nxn:4,nxs:3,object:[1,2,3,4,5,6],objective_funct:4,occur:8,offset:[1,3,5,7],one:[1,4,8],onli:[1,4,5,6,7,8],onto:[1,4],op0:4,op1:4,op2:4,oper:[1,2,6],operatorcompositionfunct:4,optim:[2,4],optimis:[1,2,5],option:[1,4,5,6,7,8],order:[1,3,4,7],org:[1,3,4,5,6,8],orient:[2,4],origin:[1,4,8],orthogon:[1,4],other:[1,2,4,6,8],otherwis:[1,4,8],otim:4,our:[1,4],out:[1,4,5,6,7,8],outer:8,outlier:6,output:[2,3,4,5,6,7,8],outsid:[6,8],over:[4,6],overset:4,p_i:4,packag:[2,4],pad:6,pad_width:6,padder:2,pair:4,panel:[1,6],papoutselli:4,parallel:[2,5,6,8],param:[1,3,4,8],paramet:[1,3,4,5,6,7,8],parent:1,parrallel:1,pars:3,part:[4,5],partial_:4,partial_i:4,partial_x:4,particular:[4,8],pasca:4,pass:[1,4,5,6,7,8],path:[3,8],pawel:4,pdf:4,pdf_1:4,pdgh:4,pdhg:4,pdhg_vs_spdhg:4,peak:8,penalis:4,pepper:8,per:4,percent:8,perform:[1,4,6],period:4,permiss:8,permit:8,pet:4,peter:4,phantom:5,philip:4,philosoph:4,photon:6,physic:[1,4],pipelin:1,pixel:[1,3,4,6,8],pixel_num_h:1,pixel_num_v:1,pixel_s:1,pixel_size_h:1,pixel_size_v:1,pjm:4,place:[1,4,7],placehold:[1,4],pleas:[0,1,2,5,6],plot:8,plugin:[1,2,6],png:8,pock:4,point:[1,4,8],pointer:[1,4],poisson:[4,8],poissonloglikelihoodwithlinearmodelformean:4,poorli:8,posit:[1,4,7,8],positron:4,possibl:[1,3,4,8],power:[1,2,4,7,8],powermethod:[4,5],practic:1,pre:[2,4,7],preced:[1,4],precondit:4,prefix:3,prepend:4,present:[1,4],preserv:8,preval:8,previou:[4,5,6],primal:4,print:4,print_interv:4,prior:[1,4,8],prioriti:4,prob:4,probabl:4,problem:[1,2,4,8],process:[1,4,5,6,7],processor:[1,2,5],procur:8,produc:1,product:[1,4,8],profit:8,project:[1,2,3,4,6,7],projecteuclid:4,projection_c:4,projection_index:[1,6],projection_p:4,projectionoper:5,projector:[5,7],promot:8,proper:[4,8],properti:[1,2,4],proport:8,prototyp:[2,4],provid:[1,2,3,4,5,6,7,8],prox:4,prox_:4,proxim:4,proximal_conjug:4,pseudo:8,psnr:8,purpos:[4,8],pydata:0,pyplot:8,python2:[1,4],python:[3,4,6],quad:4,quadrat:[4,6],qualiti:[1,2],quality_measur:8,quantil:6,quickli:1,r_1:1,r_2:1,radia:2,radian:1,radiat:1,rai:[1,5],rainbow:8,rais:4,ral:4,ram:[5,7],ramp:6,random:[1,4,8],random_int:1,random_nois:8,rang:[1,4,5,6,8],range_geometri:[4,5],range_init:4,rangl:4,rapid:[2,4],rare:8,rate:4,rather:[1,4],ratio:[5,8],ray_direct:1,reach:[1,4,5],read:[2,6],read_as_acquisitiondata:3,read_as_imagedata:3,read_as_origin:3,reader:[1,2],real:[1,2,4],rebin:6,receiv:4,recognis:1,recommend:[1,7],recon:2,reconstruct:[1,2,4,5,6],reconstructor:[2,5],redaer:3,redistribut:8,reduc:[1,7],reduct:1,refer:[0,1,2,3,4,5,6,8],referenc:[5,6,7],reflect:[4,6],regener:1,region:6,regularis:[1,2,4],rel:[5,6],relat:4,relax:4,releas:1,remain:6,remark:4,remov:2,render:0,reorder:1,repeat:4,replac:8,repositori:[1,2],repositoryy:4,repres:[1,4,6,8],represent:1,reproduc:8,request:[1,3,6,8],requir:[1,4,5,6,7],reserv:8,reset:7,reshap:[1,3],resolut:1,resolution_chart:8,resort:1,respect:[1,3,4,8],rest:4,restart:4,resul:[1,4],result:[1,3,4,6,7,8],retain:8,return_al:4,revers:[1,4],rewritten:4,rgensen:4,riff:3,right:[1,3,4,8],rightarrow:4,ring:2,ringremov:6,roi:[3,6],roll:6,rosenbrock:4,rotat:[2,5],rotation_axis_direct:1,rotation_axis_posit:1,round:8,row:[1,3,4],row_wise_compat:4,royal:4,royalsocietypublish:4,rsta:4,rule:4,run:[1,4,5,6,7],rvert_:4,ryan:4,s10107:4,s10851:4,saddl:4,sai:4,salt:8,salt_vs_pepp:8,same:[1,4,6,8],sampl:[1,4],sapyb:[1,4],satisfi:4,save:[1,3,4,8],savefig:8,scalar:[1,4,5],scale:[2,3,4,6,8],scaledfunct:4,scaledoper:4,scan:1,scatter:[1,4],schemat:8,schonlieb:4,scienc:4,scikit:8,scikit_random_nois:8,scipi:[1,4],screen:4,search:[1,6,8],search_rang:[1,6],second:[1,4,6],secondli:2,section:4,see:[4,5,6,8],seed:[1,4,8],select:8,selector:8,self:[1,4,5,7],sensibl:3,separ:4,sequent:8,serial:4,servic:8,set:[1,2,3,4,5,6,7],set_angl:[1,5],set_backend:7,set_channel:[1,5],set_fft_ord:7,set_filt:7,set_filter_inplac:7,set_image_geometri:7,set_input:[5,6,7],set_label:1,set_norm:4,set_panel:[1,5],set_split_process:7,set_step_s:4,set_up:[3,4],sever:[1,3],sgn:4,shall:8,shape:[1,4,8],share:4,sharp:[1,6],she:1,shinkoper:4,shortcut:[3,6],shorter:4,should:[1,4,8],should_stop:4,show2d:2,show:8,show_geometri:2,shown:1,shrinkag:4,siam:4,siddon:5,side:[1,6],sigma:[4,6],sigma_:4,sigma_i:4,sign:[1,4,8],signal:8,signatur:[4,5],signific:1,similar:1,simpl:[1,2,5,7],simple_phantom_2d:8,simplest:1,simpli:1,simplifi:1,simul:[2,4],simulated_cone_beam_data:8,simulated_parallel_beam_data:8,simulated_sphere_volum:8,simultan:4,singl:[1,3,4,6,7,8],singular:4,sinogram:[1,5,6],sinogram_geometri:5,sirf:4,sirt:4,size:[1,3,4,6,8],skimag:8,skip:3,slice:[1,2,3,6,7],slice_index:[1,6],slice_list:8,slice_numb:8,slicer:2,slices_per_chunk:7,slider:8,slight:1,small:8,smooth:[2,5],smoothmixedl21norm:4,societi:4,softwar:[1,4,8],softx:5,sol:4,solut:[1,4],solv:[1,2,4,8],some:[1,4,6],some_data:1,soon:4,sop:4,sort:1,sourc:[1,2,3,4,5,6,7],source_posit:1,sourceforg:4,space:[4,5],spacechannel:4,spars:4,sparsefinitedifferenceoper:4,spatial:4,spdhg:4,special:[4,8],special_valu:6,specif:[1,3,4,8],specifi:[1,3,4,6,8],speckl:8,spectral:[1,4],sphere:8,sphinx:0,split:[4,7],springer:4,sqrt:[1,4,6],squar:[1,2,8],squared_norm:1,stabl:[6,8],stack:[3,6],stage:1,standard:[1,3,6,8],stanford:4,start:[3,4,6,8],state:4,statement:[1,6],stationari:1,statu:4,std:6,step:[1,3,4,5,6],step_siz:4,sting:1,stir:4,stochast:4,stop:[1,4,5,6],store:[1,4],str:[1,3,4,5,6,8],strategi:4,strict:8,string:[1,3,4,5,6,7,8],stripe:6,strongli:4,structur:4,style:0,sub:5,subclass:[2,4],subject:4,subplot:8,subproblem:4,subsequ:4,subset:1,substitut:8,subtract:[1,4],suffici:1,suit:1,suitabl:1,sum:[1,4],sumfunct:4,sumscalarfunct:4,sup:[4,5],support:[1,4,6,7],suppress:[5,6,7],sure:[1,4],swap:4,symmetr:[4,6],symmetrisedgradientoper:4,sync:4,synchrotron:1,synchrotron_parallel_beam_data:8,system:[1,2],tabul:4,take:[1,4,6],task:5,tau:4,tau_:4,team:8,teboul:4,techniqu:[1,4],tempor:5,temporari:7,temporarili:8,term:[1,4,5],test:[2,4],testdata:8,text:4,textbf:4,tgv:5,than:[1,3,4,5,7],thei:[1,4,8],them:[3,4],theme:0,theoret:1,theori:8,therefor:1,thereof:4,theta:4,theta_:4,thi:[0,1,2,4,5,6,7,8],thieleman:4,think:1,thoma:4,those:1,thread:[1,4],three:[1,4],threshold:[4,6],threshold_factor:6,threshold_valu:6,through:3,tiff:[2,8],tiffstackread:3,tiffwrit:3,tigr:[1,2,6,7],tikhonov:1,tild:1,time:[4,7],tip:4,titl:8,tmp:4,tmp_nexu:3,tnv:5,togeth:3,toggl:4,toler:[1,4,5,6],tomograph:[1,4],tomographi:4,tomophantom:2,toni:4,too:7,toolbox:5,toolkit:5,top:1,tort:8,total:2,totalvari:4,trajectori:[1,5],transact:4,transform:7,translat:[1,4,6],translatefunct:4,transmiss:[1,2],transmissionabsorptionconvert:6,transpos:[1,3,4],treat:4,trigger:4,trivial:2,truedivis:[1,4],tune:7,tupl:[1,4,6,8],turner:4,two:[1,4,6,7,8],txrmdataread:3,type:[1,3,4,5,6,7,8],typic:[1,4],unari:[1,4],unary_oper:[1,4],unbin:[1,6],uncompress:3,under:4,underbrac:4,underset:[1,4,5],unexpect:8,uniform:[1,8],uniqu:[1,8],unisotrop:5,unit:[1,3,4],unknown:1,unmask:6,unsign:8,until:4,updat:[1,4,6,7],update_object:4,update_objectice_interv:4,update_objective_interv:4,update_previous_solut:4,update_step_s:4,upper:[4,6,8],url:4,usag:[4,5],use:[1,4,5,6,7,8],use_axbpi:4,use_axpbi:4,used:[1,2,4,5,6,7,8],useful:[2,4],user:[1,4,6,7],uses:[5,6],using:[1,4,6,7,8],util:2,vai:4,valid:8,valu:[1,3,4,5,6,7,8],valueerror:4,vararg:4,variabl:4,varianc:8,variat:2,variou:8,vaue:6,vector:[1,4,6],vectordata:1,vectorgeometri:1,verbos:[4,7],verbose_output:4,veri:4,versatil:4,version:5,vertic:[1,3,6],very_verbos:4,view:[1,8],view_dist:8,vision:4,visualis:2,vmatrix:1,vol:4,volum:[1,2,4,5,7],volume_geometri:5,voxel:[4,5],voxel_num_i:1,voxel_num_x:1,voxel_num_z:1,voxel_size_i:1,voxel_size_x:1,voxel_size_z:1,wai:[1,4,8],want:[1,4],warm:4,warr:4,warranti:[3,8],weak:[1,3,4],web:4,websit:2,weight:[4,5],weightedl2normsquar:4,well:[2,4],were:6,what:[1,3,4],when:[0,1,4,5],where:[1,4,6,8],wherea:4,whether:[4,5,8],which:[1,3,4,6,8],whichev:7,white:3,white_level:6,widget:8,width:[1,6,7,8],william:4,window:6,wise:[1,4],wither:4,without:[4,6,8],wname:6,work:[1,4],world:1,would:[1,3,4],wrap:[1,4,5,6],write:[1,2,4],write_fil:3,writer:[1,2],written:[1,5,8],wrt:4,x_1:4,x_i:4,x_n:4,x_old:4,xcorr:[1,6],xcorrel:[1,6],xiaoqun:4,xin:4,xremovestripesvert:6,xshape:4,xtek_fil:3,xtekct:3,xtexct:3,yet:4,yield:[4,7],you:3,your:[0,5,6,7],zeiss:2,zero:[4,6],zerofunct:4,zerooper:4,zhang:4},titles:["Developer\u2019s guide","Framework","Welcome to CIL\u2019s documentation!","Read/ write AcquisitionData and ImageData","Optimisation framework","CIL Plugins","Processors","Recon","Utilities"],titleterms:{"class":4,"function":[4,5],absorpt:6,acquisitiondata:[1,3],acquisitongeometri:1,algorithm:4,analyt:7,astra:5,base:4,beam:[1,7],binner:6,block:[1,4],blockdatacontain:4,box:4,calcul:1,ccpi:5,center:1,centr:6,channel:1,cil:[2,5],composit:4,cone:[1,7],contact:2,content:2,convert:6,correct:6,data:[1,6,8],datacontain:1,dataprocessor:1,dataset:8,develop:0,diamond:8,displai:8,document:2,fan:1,fbp:[5,7],fdk:7,framework:[1,4],from:[6,8],gener:6,geometri:[1,7,8],gradientoper:4,guid:0,imag:8,imagedata:[1,3],imagegeometri:1,index:8,indic:4,interact:8,islic:8,kullbackleibl:4,l21:4,least:4,light:8,link:8,link_islic:8,manipul:6,mask:6,metric:8,mix:4,multi:1,nexu:3,nikon:3,norm:4,normalis:6,object:8,oper:[4,5],optimis:4,other:5,padder:6,parallel:[1,7],plugin:5,pre:6,processor:6,project:5,qualiti:8,read:3,reader:3,recon:7,reconstruct:7,reconstructor:7,regularis:5,remov:6,ring:6,rotat:[1,6],set:8,show2d:8,show_geometri:8,simpl:4,simul:8,slice:8,slicer:6,smooth:4,sourc:8,squar:4,subclass:1,system:8,test:8,tiff:3,tigr:5,todo:4,tomophantom:5,total:[4,5],transmiss:6,trivial:4,util:8,variat:[4,5],visualis:8,volum:8,welcom:2,write:3,writer:3,zeiss:3}})