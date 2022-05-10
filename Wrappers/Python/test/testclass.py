# -*- coding: utf-8 -*-
#   This work is part of the Core Imaging Library (CIL) developed by CCPi 
#   (Collaborative Computational Project in Tomographic Imaging), with 
#   substantial contributions by UKRI-STFC and University of Manchester.

#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at

#   http://www.apache.org/licenses/LICENSE-2.0

#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.

import unittest
from cil.framework import DataContainer
import numpy as np

def dt(steps):
    return steps[-1] - steps[-2]

class CCPiTestClass(unittest.TestCase):
    def assertBlockDataContainerEqual(self, container1, container2):
        self.assertTrue(issubclass(container1.__class__, container2.__class__))
        for col in range(container1.shape[0]):
            if issubclass(container1.get_item(col).__class__, DataContainer):
                self.assertNumpyArrayEqual(
                    container1.get_item(col).as_array(), 
                    container2.get_item(col).as_array()
                    )
            else:
                self.assertBlockDataContainerEqual(container1.get_item(col),container2.get_item(col))
    
    
    def assertBlockDataContainerAlmostEqual(self, container1, container2, decimal=7):
        self.assertTrue(issubclass(container1.__class__, container2.__class__))
        for col in range(container1.shape[0]):
            if issubclass(container1.get_item(col).__class__, DataContainer):
                self.assertNumpyArrayAlmostEqual(
                    container1.get_item(col).as_array(), 
                    container2.get_item(col).as_array(), 
                    decimal=decimal
                    )
            else:
                self.assertBlockDataContainerAlmostEqual(container1.get_item(col),container2.get_item(col), decimal=decimal)


    def assertNumpyArrayEqual(self, first, second):
        np.testing.assert_array_equal(first, second)
        

    def assertNumpyArrayAlmostEqual(self, first, second, decimal=6):
        np.testing.assert_array_almost_equal(first, second, decimal)
        
