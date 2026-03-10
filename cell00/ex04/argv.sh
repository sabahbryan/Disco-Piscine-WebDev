#!/bin/bash

if [ $# -eq 0 ] ;then
    echo "No arguments supplied"
elif [ $# -ge 4 ];then
    echo "Less than four arguments"
else
    for word in $@; do echo $word; done
fi


#echo "Arguments: $#"
    #count=1
    #while [ $count -lt 4 ]; do # less than 4
    #    echo $@
    #    ((count++))
    #done