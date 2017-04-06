import os
# build by jairus cause he was lazy to keep pasting the same code over and over again ^__^
# should work on both pc and mac

python_build_file = ('closure-library/closure/bin/build/depswriter.py')

#print build_command
#os.system(build_command)
#http://stackoverflow.com/questions/3781851/run-a-python-script-from-another-python-script-passing-in-args

import subprocess
#subprocess.Popen(build_command, shell=True)
subprocess.Popen([
  'python', python_build_file,
  '--root_with_prefix=../../js_source/manic ../../../../../js_source/manic/',
  '--root_with_prefix=../../js_source/manic/canvas ../../../../../js_source/manic/canvas/',
  '--root_with_prefix=../../js_source/manic/framework ../../../../../js_source/manic/framework/',
  '--root_with_prefix=../../js_source/manic/google ../../../../../js_source/manic/google/',
  '--root_with_prefix=../../js_source/manic/page ../../../../../js_source/manic/page/',
  '--root_with_prefix=../../js_source/manic/ui ../../../../../js_source/manic/ui/',
  '--root_with_prefix=../../js_source/manic/util ../../../../../js_source/manic/util/',
  '--root_with_prefix=../../js_source/manic/video ../../../../../js_source/manic/video/',
  '--root_with_prefix=../../js_source/monogram/page ../../../../../js_source/monogram/page/',
  '--root_with_prefix=../../js_source/monogram/component ../../../../../js_source/monogram/component/',
  '--output_file=../../js_source/google-closure-dependency-list.js'
  ], shell=True);